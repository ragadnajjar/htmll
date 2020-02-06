var showOrder = function (){
    //input
var userOrder;
var orderImage ="";
//process
while(userOrder !== "health" && userOrder !== "wealth")
{
alert("Welcome");
userOrder = prompt("please enter health or wealth");
}
var numberOfImages;
numberOfImages = prompt("How many images would you like to be represented");
for (var i=0; i< numberOfImages ;i++)
{
if(userOrder === "health" ) {
    orderImage = orderImage + '<img src="images/ddoenload2.jpg">';
}
else if (userOrder === "wealth") {
    orderImage = orderImage + '<img src="images/download.jpg">';
}
}
//output
return orderImage;
}
document.write('<h3>' + showOrder() + '</h3>');