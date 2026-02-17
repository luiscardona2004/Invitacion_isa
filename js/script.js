document.addEventListener("DOMContentLoaded", function(){

gsap.registerPlugin(ScrollTrigger);

/* Animaciones revista */
gsap.utils.toArray(".revista").forEach(section=>{
  gsap.from(section,{
    opacity:0,
    y:100,
    duration:1.5,
    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    }
  });
});

/* Luz cursor */
document.addEventListener("mousemove",(e)=>{
  gsap.to(".cursor-luz",{
    x:e.clientX,
    y:e.clientY,
    duration:0.3
  });
});

/* Música */
const audio=document.getElementById("musica");
$("#btnMusica").click(()=>audio.play());

/* Contador */
const fecha=new Date("March 28, 2026 17:00:00").getTime();

setInterval(()=>{
  const ahora=new Date().getTime();
  const dif=fecha-ahora;

  if(dif <= 0){
    $("#contador").html("¡Hoy es el gran día!");
    return;
  }

  const d=Math.floor(dif/(1000*60*60*24));
  const h=Math.floor((dif%(1000*60*60*24))/(1000*60*60));
  const m=Math.floor((dif%(1000*60*60))/(1000*60));
  const s=Math.floor((dif%(1000*60))/1000);

  $("#contador").html(`${d}d ${h}h ${m}m ${s}s`);
},1000);

/* Partículas doradas */
const canvas=document.getElementById("particulas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

let particles=[];
for(let i=0;i<100;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*3,
    speed:Math.random()*1
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="gold";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
    p.y+=p.speed;
    if(p.y>canvas.height)p.y=0;
  });
  requestAnimationFrame(animate);
}
animate();

/* BOTÓN COMENZAR EXPERIENCIA */
document.getElementById("btnComenzar").addEventListener("click", function(){

  audio.play();

  gsap.to("#intro",{
    opacity:0,
    duration:1.5,
    scale:1.1,
    ease:"power2.out",
    onComplete:()=>{
      document.getElementById("intro").style.display="none";

      gsap.from(".hero",{
        opacity:0,
        y:100,
        duration:1.5
      });
    }
  });

});

});
