if (event && event.message) {
    if (event.message.startsWith('.')) {
        const message = event.message;
        event.message = null;
        let ws = GlobalVars.getObject("WSConnection").ws;
        if (!ws) {
            while (!ws) {
                Time.sleep(10);
                ws = GlobalVars.getObject("WSConnection").ws;
            }
        }
        ws.sendText(`${Player.getPlayer().getName().getString()}&&${message.slice(1)}`)
    }
}

// connect to SendMessage event
