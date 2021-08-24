let r1 = require("readline-sync");
let fs= require("fs");
let arr=JSON.parse(fs.readFileSync("data.json").toString());
let redo=true;

while(redo==true){
let fname= r1.question("Enter first name: ");
let lname= r1.question("Enter last name: ");
let gender=r1.question("Enter gender: ");
let emailid=r1.questionEMail("Enter email: ");
let today= new Date();
let again= r1.question("Would you like to make another entry (Y/N): ");
let person={fname:fname,lname:lname,gender:gender,email:emailid,date:today};
           console.log(person);
           debugger;
           arr.push(person);
           let arrstring=JSON.stringify(arr);
           fs.writeFileSync("data.json",arrstring);
        console.log("Data stored in file");
            debugger;
           if(again=="N" || again=="n"){
                redo=false;
                r1.close;
           }
        }
