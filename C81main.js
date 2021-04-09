var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="#0085C7";
ctx.lineWidth=5;
ctx.arc(200,200,40,0,2* Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(300,200,40,0,2* Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#DF0024";
ctx.lineWidth=5;
ctx.arc(400,200,40,0,2* Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#F4C300";
ctx.lineWidth=5;
ctx.arc(250,240,40,0,2* Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#009F3D";
ctx.lineWidth=5;
ctx.arc(350,240,40,0,2* Math.PI)
ctx.rect(150, 143, 300, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=5;
ctx.rect(150, 143, 300, 150);
ctx.stroke();
