canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastX, lastY;
color="Green";
width=5;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
currentX = e.clientX - canvas.offsetLeft;
currentY = e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;

console.log("Last position of x and y = ");
console.log("x = " + lastX + "y = " +lastY);
ctx.moveTo(lastX,lastY);

console.log("current position of X and Y");
console.log("x = " + currentX + "y = " +currentY );
ctx.lineTo(currentX,currentY);
ctx.stroke();
}

lastX = currentX;
lastY = currentY;
}