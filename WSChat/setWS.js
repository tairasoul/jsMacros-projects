const WSUrl = "YOUR-BACKEND-URL"

let ws = Request.createWS(WSUrl).connect();

ws.onConnect = JavaWrapper.methodToJava(() => {
    Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] ").append('Connected to ' + WSUrl).withColor(9)
            .build());
})

let method; method = (websocket, /** @type {Websocket$Disconnected} */disconnected) => {
    if (!disconnected.isServer) {
        Time.sleep(500);
        ws = Request.createWS(WSUrl).connect();
        ws.onConnect = JavaWrapper.methodToJava(() => {
            Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] ").append('Connected to ' + WSUrl).withColor(9)
                    .build());
        })
        ws.onTextMessage = JavaWrapper.methodToJava((ws, msg) => {
            const message = JSON.parse(msg)
            Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] <")
                    .append(message[0]).withColor(10)
                    .append("> ").withColor(0x7).append(message[1]).withColor(9)
                    .build());
        })
        GlobalVars.putObject('WSConnection', {
            ws: ws
        })
        ws.onDisconnect = JavaWrapper.methodToJava(method)
    }
}

ws.onDisconnect = JavaWrapper.methodToJava(method)

ws.onTextMessage = JavaWrapper.methodToJava((ws, msg) => {
    const message = JSON.parse(msg)
    Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] <")
            .append(message[0]).withColor(10)
            .append("> ").withColor(0x7).append(message[1]).withColor(9)
            .build());
})

GlobalVars.putObject('WSConnection', {
    ws: ws
})

// register as service
// i use ngrok to forward my ws
