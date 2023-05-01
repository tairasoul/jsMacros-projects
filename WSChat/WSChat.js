if (event && event.message) {
    if (event.message.startsWith('.')) {
        const message = event.message;
        event.message = null;
        const ws = GlobalVars.getObject("WSConnection").ws
        ws.sendText(`${Player.getPlayer().getName().getString()}&&${message.slice(1)}`)
    }
}

// connect to SendMessage event
