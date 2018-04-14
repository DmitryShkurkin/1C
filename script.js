var canv = document.getElementById("mycanv");
var cntx = canv.getContext("2d");

cntx.fillRect(50, 25, 200, 250);

/* ***************************** */

var canv2 = document.getElementById("mycanv2");
var cntx2 = canv2.getContext("2d");
var sq, kr;

sq = new Path2D();
sq.moveTo(50, 50);
sq.lineTo(250, 50);
sq.lineTo(250, 250);
sq.lineTo(50, 250);
sq.lineTo(50, 50);
cntx2.stroke(sq);

kr = new Path2D();
kr.arc(150, 150, 100, 0, 2 * Math.PI);

cntx2.fill(kr);

/* **************************** */

var canv3 = document.getElementById("mycanv3");
var cntx3 = canv3.getContext("2d");

var line = new Path2D();

line.moveTo(0, 0);
line.lineTo(300, 300);

cntx3.lineWidth = 5;
cntx3.stroke(line);

cntx3.fillStyle = "red";
cntx3.fillRect(0, 0, 200, 200);

cntx3.fillStyle = "rgba(0, 255, 0, 0.5)";
cntx3.fillRect(100, 100, 300, 300);