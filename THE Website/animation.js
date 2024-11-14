"use strict";
const canvas = document.querySelector("canvas");
const crc2 = canvas.getContext("2d");
document.body.addEventListener("mouseover", mouseHover);
const ImgBackground = new Path2D;
ImgBackground.rect(580, 180, 390, 240);
crc2.fillStyle = "indianred";
crc2.fill(ImgBackground);
const img = document.getElementById("code");
img;
function mouseHover(_event) {
    let x = _event.offsetX;
    let y = _event.offsetY;
    if (crc2.isPointInPath(ImgBackground, x, y) == true) {
        console.log("yeeeeeeeeeeeeet");
        //ImgBackground.style.width = 120 + "%";
    }
    else {
        console.log("wtf");
    }
}
