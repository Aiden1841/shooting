const canvas =document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


 const player ={
    x:canvas.width/2-15,
    y:canvas.height-60,
    width:30,
    height:30,
  color:"blue",
    life:5,
 };

const bullets=[];
const BULLET_SPEED=-10;

function tryshoot(){
    bullets.push({
    x: player.x,
    y: player.y,
    width:5,
    height:5,
    vy:BULLET_SPEED,
    })
}


 //fillRect(x座標(横),y座標(縦),横幅,縦幅)
let x =225;


window.addEventListener("keydown",(e) => {
if (e.key==="ArrowLeft"){
if(player.x>10){
    player.x -= 10;
}
}else if (e.key==="ArrowRight"){
  if(player.x>5){
    player.x+= 10;
}
}else if (e.key  ==="ArrowUp"){
  player.y-= 10;
}else if (e.key  ==="ArrowDown"){
  player.y+= 10;
}else if(e.code==="Space"){
    tryshoot();
   }
});

function update(){
for (let i =0;i<bullets.length;i++){
   const bullet=bullets[i];
bullet.y+=bullet.vy;
     if (bullet.y<0){
        bullets.splice(i,1);
     }
    }
  }
function darw(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
  
    ctx.fillStyle = player.color;
   ctx.fillRect(player.x,player.y,player.width,player.height);
  
   ctx.fillStyle="white";
for (let i =0;i<bullets.length;i++){
   const bullet=bullets[i];
   ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);

}
}

  function gameLoop(){
  update();
darw();

requestAnimationFrame(gameLoop);

 }
gameLoop();


 
