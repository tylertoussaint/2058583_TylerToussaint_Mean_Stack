// load the express module 
let express = require("express");

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"//index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("obj",(msg)=> {
        console.log(msg);
        if(msg=="hi"|| msg=="Hi"){
        socket.emit("obj1",`
        hi there, what may i help you with (Billing, Report, Contact)`);
        }
        else if(msg=="Billing" || msg=="biling"){
        socket.emit("obj1",`
        For more info on billing go to www.billing.com`);
        }
        else if(msg=="Report" || msg=="report"){
            socket.emit("obj1",`
            To report an issue email issuereportHR@gmail.com`);
            }
        else if(msg=="Contact" || msg=="contact"){
                socket.emit("obj1",`
                Feel free to contact us at 123-456-7890`);
                }
        else{
        socket.emit("obj1","Please start message with Hi or choose from subjects (Billing, Report, Contact)");}
    })
    // sending data to client 
    //socket.emit("obj1","hi there");
})


// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));