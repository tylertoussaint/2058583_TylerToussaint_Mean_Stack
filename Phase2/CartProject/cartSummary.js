document.write("<h1 style=text-align:center>Order Checkout</h1>");
var array = localStorage.getItem('Array');
var cart = localStorage.getItem('Cart');
var arr = JSON.parse(array);
var count = JSON.parse(cart);
var total = 0;
if (!localStorage.getItem('Array')) {
    alert("Please fill in the data by adding to your order");
}
for (var i = 0; i < arr.length; i++) {
    total += arr[i][1];
}
var DataInTableFormat = "\n                        <table border=1 style=text-align:center;>\n                            <tr>\n                                <th>Name</th>\n                                <th>Price</th>\n                            </tr>\n                            ";
for (var i = 0; i < arr.length; i++) {
    DataInTableFormat += "<tr><td>" + arr[i][0] + "</td><td>$" + arr[i][1] + "</td></tr>";
}
DataInTableFormat +=
    " \n                     <tr><td>Cost of all orders: </td> <td> $" + total + "</td></tr>\n                     <tr><td>Total number of items: </td><td> " + count + "</td></tr>\n                     \n                     </table>\n                        ";
document.write(DataInTableFormat);
//var table= document.createElement("table");
//var colCount= arr[0].length;
//var row=table.insertRow(-1);
//for(var i=0; i<colCount;i++){
//  var hcell=document.createElement("th");
//hcell.innerHTML=arr[0][i];
//row.appendChild(hcell);}
//for (var i=1;i<arr.length;i++){
//  row=table.insertRow(-1);
//for(var j=0;j<colCount;j++){
//    var cell= row.insertCell(-1);
//   cell.innerHTML= arr[i][j];
// }
//}
//document.getElementById('info').appendChild(table);
