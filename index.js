const express = require('express');
const events = require('events');

class Server {
    listen(port, callback){
        this.port = port;
        this.callback = callback;
        // Criar um servidor para a nossa aplicação
        this.emitter.emit("listen", false);
    }

    constructor(){
        this.port;
        this.callback;
        this.emitter= new events.EventEmitter();

        this.emitter.on("listen", (success)=>{
            if(success){
                this.callback();
            }else{
              throw "Error 404";
            }
        })
    }


}

let app = new Server();

app.listen(3040, ()=>{
    console.log("Olá Mundo");
});