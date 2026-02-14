AOS.init({
    duration:1200,
    once:true
});

const btn = document.getElementById("enterBtn");
const contenido = document.getElementById("contenido");
const intro = document.getElementById("intro");
const music = document.getElementById("music");

contenido.style.display = "none";

btn.addEventListener("click", () => {
    intro.style.opacity = "0";
    setTimeout(() => {
        intro.style.display = "none";
        contenido.style.display = "block";
        music.play();
    }, 1200);
});

/* CONTADOR */

const countdown = document.getElementById("countdown");
const fechaEvento = new Date("March 28, 2026 17:00:00").getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    countdown.innerHTML = `${dias} días ${horas}h ${minutos}m ${segundos}s`;
}, 1000);
