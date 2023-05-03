if (event && event.message) {
    if (event.message.startsWith('.')) {
        const message = event.message;
        event.message = null;
        const wso = GlobalVars.getObject("WSConnection");
        const ws = wso.ws;
        if (!ws) {
            while (!ws) {
                Time.sleep(10)
            }
        }
        ws.sendText(`${Player.getPlayer().getName().getString()}&&${message.slice(1)}`)
    }
}

// connect to SendMessage event
