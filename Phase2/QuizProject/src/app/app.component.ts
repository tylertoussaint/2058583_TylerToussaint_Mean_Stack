import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Button } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'QuizProject';
  arr:Array<any>=[];
  produt:any="";
  el:any;
  flag1=false;
  count=0;
  score=0;
  
  constructor(private httpClient:HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data=>{
      this.produt=data;

      //this.arr.push(JSON.stringify(data));
      console.log(this.produt);
      //document.write(JSON.stringify(data));
    })
  }
  disp(){
    this.el=document.getElementsByTagName('input')
    for(let i=0; i<this.el.length;i++){
      if(this.el[i].checked){
        this.count= this.count+ 1;
        
      }}
      console.log(this.count)
     if(this.count<4){
       alert("Please fill all questions")
        this.arr=[];
        
      }
      else{
        this.el=document.getElementsByTagName('input')
        for(let i=0; i<this.el.length;i++){
          if(this.el[i].checked){
        console.log(this.produt);
        console.log(this.el[i].value);
        this.arr.push(this.el[i].value);
          }}
        
      console.log(this.arr);
      for(let i=0; i<this.arr.length;i++){
        if(JSON.stringify(this.arr[i])==JSON.stringify(this.produt[i].ca)){
          this.score=this.score +1;
          console.log(this.produt[i].ca)
        }
      }
      alert("You got "+this.score +" out of 10")
      
      }}
  review(){
    if(!this.flag1){
    this.flag1=true}
    else{
      this.flag1=false
    }
  }
  result(){
    for(let i=0; i<this.arr.length;i++){
      if(this.arr[i].value=this.produt.ca[i].value){
        this.score+=1;
      }
    }
    console.log(this.score)
  }
}
