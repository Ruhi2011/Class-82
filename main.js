var mousEvent="empty"
var lastpositionofx,lastpositionofy
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="black" 
width_of_line=1
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
   // color=document.getElementById("color").value;
//width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop
    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last position of x and y coordinates=");
        console.log("x="+lastpositionofx+"y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);
        console.log("Current position of x and y coordinates= ");
        console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    ctx.stroke();
    }
    lastpositionofx=current_position_of_mouse_x;
    lastpositionofy=current_position_of_mouse_y
}