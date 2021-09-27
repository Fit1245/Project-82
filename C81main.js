var mouse_event = "";
var last_mouse_event_x,last_mouse_event_y;

canvas = document.getElementById("Canvas_1");
 
ctx= canvas.getContext("2d");
color = "black";
width = 1;
radius = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value; 
mouse_event = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
  current_position_of_mouse_x = e.clientX - canvas.offsetleft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  if (mouse_event == "mouseDown")
  ctx.beginPath();
  ctx.strokestyle = color;
  ctx.linewidth = width;
  ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius , 0, 2 * Math.PI)
  ctx.moveTo(last_mouse_event_x,last_mouse_event_y);
  ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
  last_mouse_event_x = current_position_of_mouse_x;
  last_mouse_event_y = current_position_of_mouse_y;
  }
  canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
  mouse_event = "mouseup"; 
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
  mouse_event = "mouseleave"; 
}
