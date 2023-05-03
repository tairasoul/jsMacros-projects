const WSUrl = "YOUR-BACKEND-URL";

let method1;
let method2;

if (Client.mcVersion().includes("fabric")) {
    Chat.log("Using Fabric mappings.")
    method1 = 'method_1548';
    method2 = 'method_1676';
} else {   
    Chat.log("Using Forge mappings.")
    method1 = 'm_91094_';
    method2 = 'm_92546_';
}

const getUser = () => {
    return Client.getMinecraft()[method1]()[method2]()
}

const ws = Request.createWS(WSUrl).connect();

let method; method = (websocket, /** @type {Websocket$Disconnected} */disconnected) => {
    GlobalVars.putObject('WSConnection', {
        ws: null,
        connected: false
    })
    if (!disconnected.isServer) {
        //Time.sleep();
        const ws = Request.createWS(WSUrl).connect();
        ws.onTextMessage = JavaWrapper.methodToJava((ws, msg) => {
            const message = JSON.parse(msg)
            Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] <")
                    .append(message[0]).withColor(10)
                    .append("> ").withColor(0x7).append(message[1]).withColor(9)
                    .build());
        })
        GlobalVars.putObject('WSConnection', {
            ws: ws,
            connected: true
        })
        ws.onDisconnect = JavaWrapper.methodToJava(method)
        ws.onError = JavaWrapper.methodToJava((websocket, /** @type {WebSocketException} */ exception) => {
            Chat.log('error encountered')
            Chat.log(exception)
        })

        ws.sendText(`${getUser()}&&connected`);
    }
}

ws.onError = JavaWrapper.methodToJava((websocket, /** @type {WebSocketException} */ exception) => {
    Chat.log('error encountered')
    Chat.log(exception)
    FS.open('log.txt').append(exception + '\n')
})

ws.onDisconnect = JavaWrapper.methodToJava(method)

ws.onTextMessage = JavaWrapper.methodToJava((ws, msg) => {
    const message = JSON.parse(msg)
    Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] <")
            .append(message[0]).withColor(10)
            .append("> ").withColor(0x7).append(message[1]).withColor(9)
            .build());
})

GlobalVars.putObject('WSConnection', {
    ws: ws,
    connected: true
})

ws.sendText(`${getUser()}&&connected`);
