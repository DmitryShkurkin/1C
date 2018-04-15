var canv = document.getElementById("clock");
var cntx = canv.getContext("2d");

function DrawLine(x1, y1, x2, y2, cr, lw)
{
    var ln;
    ln = new Path2D();    
    ln.moveTo(x1, y1);
    ln.lineTo(x2, y2);
    cntx.strokeStyle = cr;
    cntx.lineWidth = lw;
    cntx.stroke(ln);
}

function DrawClock()
{
    /* Циферблат */

    var cl;
    cl = new Path2D();
    cl.arc(150, 150, 149, 0, 2 * Math.PI);
    cntx.strokeStyle = "black";
    cntx.lineWidth = 1;
    cntx.stroke(cl);

    var R = 300 / 2, d, angle, pX, pY, qX, qY;

    for (d = 0; d < 60; ++d) {
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R; pY += R;
        qX += R; qY += R;
        DrawLine(pX, pY, qX, qY, "black", 1);
    }

    /*
    cntx.font = 150 * 0.15 + "px arial";
    cntx.textBaseline = "middle";
    cntx.textAlign = "center";
    for (d = 1; d < 13; d++) {
        angle = d * Math.PI / 6;
        cntx.rotate(angle);
        cntx.translate(0, -150 * 0.85);
        cntx.rotate(-angle);
        cntx.fillText(d.toString(), 0, 0);
        cntx.rotate(angle);
        cntx.translate(0, 150 * 0.85);
        cntx.rotate(-angle);
    }
    */

    /* Стрелки */

    var d = new Date();
    var h, m, s;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    console.log(h, m, s);

    /* Секунды */
    sAngle = (s / 60) * (2 * Math.PI);
    sAngle = Math.PI / 2 - sAngle;
    pX = Math.cos(sAngle) * R;
    pY = -Math.sin(sAngle) * R;
    pX += R; pY += R;
    DrawLine(pX, pY, 150, 150, "red", 1);

    /* Минуты */
    mAngle = (m / 60) * (2 * Math.PI);
    mAngle = Math.PI / 2 - mAngle;
    pX = Math.cos(mAngle) * R * 0.8;
    pY = -Math.sin(mAngle) * R * 0.8;
    pX += R; pY += R;
    DrawLine(pX, pY, 150, 150, "black", 3);

    /* Часы */
    hAngle = ((h % 12) / 12) * (2 * Math.PI);
    hAngle = Math.PI / 2 - hAngle;
    pX = Math.cos(hAngle) * R * 0.6;
    pY = -Math.sin(hAngle) * R * 0.6;
    pX += R; pY += R;
    DrawLine(pX, pY, 150, 150, "black", 5);
}

function RedrawClock()
{
    cntx.clearRect(0, 0, 300, 300);
    DrawClock();
    setTimeout(RedrawClock, 1000);
}

RedrawClock();