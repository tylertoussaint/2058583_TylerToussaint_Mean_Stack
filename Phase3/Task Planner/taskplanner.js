let http = require("http");
let url = require("url");
let fs= require("fs");
let alert=require('alert')

let arr=JSON.parse(fs.readFileSync("data.json").toString());
console.log(arr)
let taskplannerPage=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div>
    <h2>Add task</h2>
    <form action="addtask">
        <label>Employee ID</label>
        <input type="text" name="empid"/><br/>
        <label>Task ID</label>
        <input type="text" name="taskid"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>Deadline</label>
        <input type="date" name="date"/><br/>
        <input type="submit" value="submit" id="btn" />
       <input  type="reset" value="reset"/> 
    </form>
</div>
<div>
<h2>Delete task</h2>
<form action="deletetask">

    <label>Task ID</label>
    <input type="text" name="taskid"/><br/>
    <input type="submit" value="submit" id="btn" />
   <input  type="reset" value="reset"/> 
</form>
</div>
<div>
<h2>Show tasks</h2>
<form action="showtask">

    <input type="submit" value="Display Tasks" />
    </form>
    </div>
   <div>
    <table id="mytable">
    <tr>
    <th>Employee Id</th>
    <th>Task Id</th>
    <th>Task</th>
    <th>Deadline<th>
   
`;
let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    response.write(taskplannerPage)
    if(urlInfo.pathname=="/addtask"){

    let person=urlInfo.query;
    let results= arr.find(l=>l.taskid==person.taskid);
    console.log("this is array"+ person.taskid);
    if(results!=undefined){
        alert("Please chose a unique task id");}
    else{
        
        arr.push(person);
        let arrstring=JSON.stringify(arr);
        fs.writeFileSync("data.json",arrstring);
    console.log(person.empid);
    console.log(arr);
    console.log(results);}
    }
    if(urlInfo.pathname=="/deletetask"){
        let person=urlInfo.query;
        let taskindex=arr.findIndex(l=> l.taskid==person.taskid);
        arr.splice(taskindex,1);
        console.log(arr);
    }
    if(urlInfo.pathname=="/showtask"){
        let res=JSON.parse(fs.readFileSync("data.json").toString());
        //arrsting=JSON.parse(res)
        for(let i=0; i<arr.length;i++){
            console.log("this is in showtask"+ res[i].empid);
            response.write(`<tr>
            <td>${res[i].empid}</td>
            <td>${res[i].taskid}</td>
            <td>${res[i].task}</td>
            <td>${res[i].date}</td>
            </tr>`);
            
        }
        response.write(`
        </table>
        </body>
        </html>`)
            
         
         
            
    
    
}
    
})

    
server.listen(9090,()=>console.log("Server running on port number 9090"))