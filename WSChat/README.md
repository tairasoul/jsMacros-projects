# JsMacros-websocket-chat

Backend uses NodeJS and the npm package WS.

Set setWS.js as a service, and put WSChat on the SendMessage event.
To talk with people through the websocket, prefix your message with a .
For example: .hello goobers

I personally use ngrok to forward my websocket by editing config for multiple tunnels, then using nginx to redirect different locations to each websocket port.
