function createBackend(port) {
    const ws = require('ws');

    const wss = new ws.Server({
        port: port
    })

    const clients = [];
    let bufferedMessages = [];
    let bufferMessages = false;
    let disconnectedClients = {

    };

    wss.on('connection', (socket) => {
        let socketLastMessage;
        let clientName;
        clients.push(socket)
        console.log(`[${port}] new client connected`)
        socket.on('message', (message) => {
            socketLastMessage = message.toString()
            const msg = message.toString();
            const split = msg.split('&&');
            if (split && split[1] == "connected") {
                for (const prop in disconnectedClients) {
                    if (disconnectedClients[prop] && disconnectedClients[prop].name == split[0]) {
                        bufferMessages = false;
                        for (const bufferedMessage of bufferedMessages) {
                            socket.send(bufferedMessage)
                        }
                        delete disconnectedClients[prop]
                    }
                }
                clientName = split[0];
            }
            else {
                for (const client of clients) {
                    const sent = JSON.stringify(msg.split('&&'));
                    if (sent.length > 1) client.send(sent)
                    if (bufferMessages) {
                        bufferedMessages.push(sent)
                    }
                }
                
            }
            console.log(`[${port}] ${msg}`)
            
        })
        socket.on('close', () => {
            console.log(`[${port}] client disconnected`)
            if (clientName) {
                if (socketLastMessage != "disconnect") {
                    for (const client of clients) {
                        if (client == socket) {
                            clients[client] = null;
                            socket.removeAllListeners('message');
                            socket.removeAllListeners('close');
                        }
                    }
                }
                else {
                    bufferMessages = true
                    disconnectedClients[clientName] = {
                        name: clientName
                    }
                }
            }
        })
    })
}

createBackend(9090);
createBackend(8080);
