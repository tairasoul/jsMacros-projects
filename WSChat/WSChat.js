if (event && event.message) {
    if (event.message.startsWith('.')) {
        const message = event.message;
        event.message = null;
        const ws = GlobalVars.getObject("WSConnection").ws
        ws.sendText(`${Player.getPlayer().getName().getString()}&&${message.slice(1)}`)
        Chat.log(Chat.createTextBuilder().append("[").append('WS').withColor(2).append("] ")
            .append(Player.getPlayer().getName().getString()).withColor(10)
            .append(": ").withColor(0x7).append(message.slice(1)).withColor(9)
            .build());
    }
}

// connect to SendMessage event
