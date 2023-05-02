const WSURL = "YOUR-BACKEND-URL-HERE"

let ws = Request.createWS(WSUrl).connect();

ws.onConnect = JavaWrapper.methodToJava(() => {
    Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] ").append('Connected to ' + WSUrl).withColor(9)
            .build());
})

ws.onDisconnect = JavaWrapper.methodToJava(() => {
    Time.sleep(1000)
    ws = Request.createWS(WSUrl).connect()
    GlobalVars.putObject('WSConnection', {
        ws: ws
    })
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

// register as service
// i use ngrok to forward my ws
