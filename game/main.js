document.getElementById("txt").innerText= "これはゲームです";
const canvas =document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//fillRect(x座標(横),y座標(縦),横幅,縦幅)

let x =225;

window.addEventListener("keydown",(e)=>{
if (e.key==="ArrowLeft"){
x -= 10;
}else if (e.key==="ArrowRight"){
x+=10;
}else if(e.key==="space"){
    tama+=1;
}
});

let y1=0;
let y2=0;


function gameLoop() {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="red";
    ctx.fillRect(150,y1,30,30);
    y1+=1;
    ctx.fillStyle="red";
    ctx.fillRect(300,y2,30,30);
    y2+=1;
    ctx.fillStyle = "blue";
   ctx.fillRect(x,480,30,30);
  
   requestAnimationFrame(gameLoop);
}

gameLoop();