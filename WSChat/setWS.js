const ws = Request.createWS("YOUR-BACKEND-URL").connect();
ws.onDisconnect = JavaWrapper.methodToJava(() => {
    ws.connect()
})
ws.onTextMessage = JavaWrapper.methodToJava((ws, msg) => {
    const message = JSON.parse(msg)
    Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] ")
            .append(message[0]).withColor(10)
            .append(": ").withColor(0x7).append(message[1]).withColor(9)
            .build());
})

GlobalVars.putObject('WSConnection', {
    ws: ws
})

// register as service
// i use ngrok to forward my ws
