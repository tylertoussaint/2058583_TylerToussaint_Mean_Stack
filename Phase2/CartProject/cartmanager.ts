var arr:Array<any>=[];
var cart:number=0;
//const b1= document.querySelector("button1");
//b1?.addEventListener("click",disp);

function disp():void{
    console.log("Worked");
}

interface items{
    name:string;
    price:number;

    
}


function additem(name:string,price:number):any{
    if(localStorage.getItem('Array')){
        arr= JSON.parse(localStorage.getItem('Array'))
        cart=JSON.parse(localStorage.getItem('Cart'))
    }
    arr.push([name,price]);
    cart+=1;
   
    localStorage.setItem('Array',JSON.stringify(arr));
    localStorage.setItem("Cart",JSON.stringify(cart));
    alert("Item added to cart! You now have " + cart + " items");
    return arr;

}
function addItem1():any {
    var item1:items= {name:"mango", price:5.00};
    additem(item1.name,item1.price);
    console.log(arr);
    console.log(cart)
    //additem(item1.name,item1.price)

}
function addItem2():any {
    var item2:items= {name:"Banana", price:1.50};
    additem(item2.name,item2.price);
    console.log(arr);
    //additem(item1.name,item1.price)

}
function addItem3():any {
    var item3:items= {name:"Strawberry", price:3.00};
    additem(item3.name,item3.price);
    console.log(arr);
    //additem(item1.name,item1.price)

}
function addItem4():any {
    var item4:items= {name:"Blueberry", price:2.50};
    additem(item4.name,item4.price);
    console.log(arr);
}
function clearStore():void{
    localStorage.clear()}

  
  
    //additem(item1.name,item1.price)


//class item5 implements items{
    //name:string
    //price:number

    //additem(name:string= "mango",price:number=3):any{
        
     //   arr.push([name,price])
    //    console.log(arr)
    //    return(arr)
        
   // }
//}
//let emp1 = new item1();
//emp1.additem();
//}
//addItem1();