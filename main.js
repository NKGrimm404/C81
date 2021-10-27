

//Circle Start//
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5 ;
ctx.arc(200 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();
//Circle End//

//Circle Start//
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5 ;
ctx.arc(300 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();
//Circle End//

//Circle Start//
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5 ;
ctx.arc(400 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();
//Circle End//

//Circle Start//
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5 ;
ctx.arc(250 , 250 , 40 , 0 , 2*Math.PI);
ctx.stroke();
//Circle End//

//Circle Start//
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5 ;
ctx.arc(350 , 250 , 40 , 0 , 2*Math.PI);
ctx.stroke();
//Circle End//



mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;
circle(mouse_x , mouse_y);


function circle(mouse_x , mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x ,mouse_y , 40 , 0 , 2*Math.PI);
    ctx.stroke();
}


//rect?//IT WON'T WORK//
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
//rect?//