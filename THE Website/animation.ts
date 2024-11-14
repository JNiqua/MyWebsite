const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

document.body.addEventListener("mouseover", mouseHover);

const ImgBackground: Path2D = new Path2D;
ImgBackground.rect(580, 180, 390, 240);
crc2.fillStyle = "indianred";
crc2.fill(ImgBackground);

const img: HTMLImageElement = document.getElementById("code")!;
img

function mouseHover(_event: MouseEvent): void {
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;
    
    if (crc2.isPointInPath(ImgBackground, x, y) == true) {
        console.log("yeeeeeeeeeeeeet");
        //ImgBackground.style.width = 120 + "%";

    } else {
        console.log("wtf");
    }
}
