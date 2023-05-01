const ws = require('ws');

const wss = new ws.Server({
    port: 8080
})

const clients = [];

wss.on('connection', (socket) => {
    clients.push(socket)
    console.log('new client connected')
    socket.on('message', (message) => {
        const msg = message.toString();
        for (const client of clients) {
            const sent = JSON.stringify(msg.split('&&'));
            if (sent.length > 1) client.send(sent)
        }
        console.log(msg)
    })
    socket.on('close', () => {
        console.log('client disconnected')
        for (const client of clients) {
            if (client == socket) {
                clients[client] = null
            }
        }
    })
})
