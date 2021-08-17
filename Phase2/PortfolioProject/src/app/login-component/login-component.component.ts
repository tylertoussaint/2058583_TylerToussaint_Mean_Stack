import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  arr:Array<string>=[]
  arrtable:Array<string>=[]
  use:string="";
  flag1=false;
  flag2=true;
  flag3=false;
  registerRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  tableRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required])
  })
  putArray(
  ){
    let register= this.registerRef.value;
   
    this.arr.push(register);
    console.log(this.arr);
    this.flag2=false;
    this.flag1=true;
    this.flag3=false;
    
    }
  checkArray(){
    let login= this.loginRef.value;
    console.log(login, this.arr, this.arr.length);
    
    for (let i=0;i<this.arr.length;i++){
      console.log(this.arr[i])
      if (JSON.stringify(login)==JSON.stringify(this.arr[i])){
          alert("Succesfully signed in")
          this.flag1=false;
          this.flag2=false;
          this.flag3=true;
          //document.getElementById("greet").innerHTML="Welcome " + login.user
      }
      else{
         alert("Username or password is incorrect")
      }
  }
  
}
  disTable(){
  let dis=this.tableRef.value;
  
  this.arrtable.push(dis)
  console.log(dis.fname, dis.phone)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
