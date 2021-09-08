let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors")
let alert = require('alert')


//creating the reference of express module 
let app = express();
// which is use to enable post data receving from normal html form. 
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
let mongoose = require("mongoose");
//url 
let url = "mongodb://localhost:27017/connectMongotoWebsite";
let userDetails=[];
mongoose.pluralize(null);           // to avoid lower case collection creation and adding s.

// connect the database it return promise object 
mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

//to use this db connection we have to call function 
let db = mongoose.connection;
db.once("open",()=> {
    // We have to defined schema which provide the structure for collection 
    let productSchema = mongoose.Schema({
        _id:Number,
        name:String,
        description:String,
        amount:Number
    })


let productModel = mongoose.model("Product",productSchema);

app.get("/",(request,response)=> {
    response.sendFile(__dirname+"//index.html");
  //  response.send("Welcome to Express JS Simple Module");
})
app.get("/addCourse",(request,response)=> {
    
    response.sendFile(__dirname+"//addCourse.html");
})
app.get("/updateCourse",(request,response)=> {
    
    response.sendFile(__dirname+"//updateCourse.html");
})
app.post("/updatec",(request,response)=> {
    let cid= request.body;
    console.log(cid.id,cid.amount)
    productModel.updateOne({_id:cid.id},{$set:{amount:cid.amount}},(err,result)=> {
    if(!err){
        console.log(result)
        if(result.modifiedCount>0 || result.matchedCount>0){
                alert("Product updated successfully")
        }else {
                alert("Prouct didn't update");
        }
    }else {
        console.log(err);
    }}) })
app.get("/index",(request,response)=> {

    response.sendFile(__dirname+"//index.html");
})

app.get("/deleteCourse",(request,response)=> {
    
    response.sendFile(__dirname+"//deleteCourse.html");
})
app.post("/delc",(request,response)=> {
    let cid=request.body.pid;
    console.log("full" +cid)
    productModel.findByIdAndDelete({_id:Number(request.body.pid)},(err,result)=> {
       console.log(result);
        if(!err){
                if(result!=undefined){
                        alert("Record deleted successfully");
                }else {
                        alert("Record not present");
                }
        }else {
                console.log(err)
        }
})})
app.get("/addc",(request,response)=> {
     
    let cid= request.query['id']
    
    cname=request.query['name']
    cdescription=request.query['description']
    camount=request.query['amount']
    
    let p1 = new productModel({_id:cid,name:cname,description:cdescription,amount:camount});
    
            alert("Successfully Inserted");
           
            productModel.insertMany([p1]).
            then(res=>console.log("inserted")).
            catch(err=>alert("Please use another id"));
            
     
    
})
app.get("/fetchCourses",(request,response)=>{
   
    response.write(`
                    <table>
                    <tr><th>Course ID</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                    </tr>`)
    productModel.find({},(err,doc)=> {
        if(!err){
                doc.forEach(rec=> {
                    
                    response.write(`<tr><td> ${rec.id}</td> <td> ${rec.name}</td><td> ${rec.description}</td><td> ${rec.amount}</td></tr>`);
                    
                })
                response.end(`</table>
                <a href="index">Index</a> |
    <a href="addCourse">Add Course</a> |
    <a href="deleteCourse">Delete Course</a> 
    <a href="updateCourse">Update Course</a>`)
        }else {
            console.log(err);
        }
        
  }) });
})

 



app.listen(9090,()=>console.log("Server running on port number 9090"))
