$(document).ready(function(){

  $("#contenido").hide();

  $("#enterBtn").click(function(){
    $("#intro").fadeOut(1500);
    $("#contenido").fadeIn(1500);
    document.getElementById("music").play();
  });

});

/* CURSOR LIGHT */
document.addEventListener("mousemove",(e)=>{
  document.querySelector(".cursor-light").style.left = e.pageX+"px";
  document.querySelector(".cursor-light").style.top = e.pageY+"px";
});

/* HERO 3D */
document.addEventListener("mousemove",(e)=>{
  const x = (window.innerWidth/2 - e.pageX)/30;
  const y = (window.innerHeight/2 - e.pageY)/30;
  document.querySelector(".hero-3d").style.transform =
  `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* SWIPER */
new Swiper(".mySwiper",{
  effect:"coverflow",
  grabCursor:true,
  centeredSlides:true,
  slidesPerView:"auto",
  coverflowEffect:{
    rotate:30,
    depth:100,
    slideShadows:true,
  },
});

/* CONTADOR */
const countdown=document.getElementById("countdown");
const fechaEvento=new Date("March 28, 2026 17:00:00").getTime();

setInterval(()=>{
  const ahora=new Date().getTime();
  const dif=fechaEvento-ahora;
  const dias=Math.floor(dif/(1000*60*60*24));
  const horas=Math.floor((dif%(1000*60*60*24))/(1000*60*60));
  const min=Math.floor((dif%(1000*60*60))/(1000*60));
  const seg=Math.floor((dif%(1000*60))/1000);
  countdown.innerHTML=`${dias} días ${horas}h ${min}m ${seg}s`;
},1000);

/* PETALOS */
for(let i=0;i<40;i++){
  let petalo=document.createElement("div");
  petalo.classList.add("petalo");
  petalo.style.left=Math.random()*100+"vw";
  petalo.style.animationDuration=(5+Math.random()*5)+"s";
  document.body.appendChild(petalo);
}
