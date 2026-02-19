document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  /* Animaciones revista */
  gsap.utils.toArray(".revista").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    });
  });

  /* Luz cursor */
  document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor-luz", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
  });

  /* Música */
  const audio = document.getElementById("musica");

  /* Contador */
  const fecha = new Date("March 28, 2026 17:00:00").getTime();

  setInterval(() => {
    const ahora = new Date().getTime();
    const dif = fecha - ahora;

    if (dif <= 0) {
      document.getElementById("contador").innerHTML = "¡Hoy es el gran día!";
      return;
    }

    const d = Math.floor(dif / (1000 * 60 * 60 * 24));
    const h = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dif % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);


  /* ============================= */
  /* NUEVO EFECTO PÉTALOS PREMIUM */
  /* ============================= */

  const container = document.querySelector(".petalos-container");
  let intervaloPetalos;

  function crearPetalo() {

    const petalo = document.createElement("div");
    petalo.classList.add("petal");

    const colores = [
      "rgba(212,175,55,0.35)", // dorado
      "rgba(255,255,255,0.3)"  // blanco suave
    ];

    const color = colores[Math.floor(Math.random() * colores.length)];

    petalo.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 2C8 7 3 11 3 15
               C3 19.4 7.1 22 12 22
               C16.9 22 21 19.4 21 15
               C21 11 16 7 12 2Z"
            fill="${color}"/>
    </svg>
  `;

    petalo.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 15 + 10;
    petalo.style.width = size + "px";
    petalo.style.height = size + "px";

    const duration = Math.random() * 8 + 8;
    petalo.style.animationDuration = duration + "s";

    container.appendChild(petalo);

    setTimeout(() => {
      petalo.remove();
    }, duration * 1000);
  }


  /* BOTÓN COMENZAR EXPERIENCIA */
  document.getElementById("btnComenzar").addEventListener("click", function () {

    audio.play();

    intervaloPetalos = setInterval(crearPetalo, 700);

    gsap.to("#intro", {
      opacity: 0,
      duration: 1.5,
      scale: 1.1,
      ease: "power2.out",
      onComplete: () => {
        document.getElementById("intro").style.display = "none";

        gsap.from(".hero", {
          opacity: 0,
          y: 100,
          duration: 1.5
        });
      }
    });

  });

  /* CARRUSEL FADE AUTOMÁTICO */
  const slides = document.querySelectorAll(".carrusel-fade .slide");
  let index = 0;

  function cambiarSlide() {
    slides[index].classList.remove("active");

    index++;
    if (index >= slides.length) {
      index = 0;
    }

    slides[index].classList.add("active");
  }

  setInterval(cambiarSlide, 4000); // cambia cada 4 segundos


});
