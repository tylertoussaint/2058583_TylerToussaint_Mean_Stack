let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors")
let alert = require('alert')
let app = express();
let http = require("http").Server(app);


let io = require('socket.io')(http);

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
let mongoose = require("mongoose");

let url = "mongodb://localhost:27017/chatlogdb";
let userDetails=[];
mongoose.pluralize(null);           

mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

let db = mongoose.connection;
db.once("open",()=> {
     
    let productSchema = mongoose.Schema({
        name:String,
        text:String
    })
    let productModel = mongoose.model("Product",productSchema);
    app.get("/",(req,res)=> {
        res.sendFile(__dirname+"//index.html");
    })
    
    io.on("connection",(socket)=> {
        console.log("Client connected");
        // receive the message from client application 
        socket.on("obj",(msg)=> {
            console.log(msg.name+"  "+msg.text);
            productModel.insertMany([msg]).
            then(res=>alert("inserted")).
            catch(err=>alert("Did not insert"));
            if(msg.text=="hi"|| msg.text=="Hi"){
            socket.emit("obj1",`
            hi there, what may i help you with (Billing, Report, Contact)`);
            }
            else if(msg.text=="Billing" || msg.text=="biling"){
            socket.emit("obj1",`
            For more info on billing go to www.billing.com`);
            }
            else if(msg.text=="Report" || msg.text=="report"){
                socket.emit("obj1",`
                To report an issue email issuereportHR@gmail.com`);
                }
            else if(msg.text=="Contact" || msg.text=="contact"){
                    socket.emit("obj1",`
                    Feel free to contact us at 123-456-7890`);
                    }
            else{
            socket.emit("obj1","Please start message with Hi or choose from subjects (Billing, Report, Contact)");}
        })
       
    })


})
http.listen(9090,()=>console.log("Server running on port number 9090"))