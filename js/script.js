const countdown = document.getElementById("countdown");

const fechaEvento = new Date("June 20, 2026 19:00:00").getTime();

const intervalo = setInterval(() => {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        ${dias} días ${horas}h ${minutos}m ${segundos}s
    `;

    if (diferencia < 0) {
        clearInterval(intervalo);
        countdown.innerHTML = "¡Llegó el gran día!";
    }

}, 1000);
