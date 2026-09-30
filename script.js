/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    const sobre = document.getElementById("sobreContainer");

    const carta = document.getElementById("carta");

    sobre.style.display = "none";

    carta.style.display = "block";

}


/* =========================
   BOTÓN ACEPTO
========================= */

function aceptar() {

    const carta = document.getElementById("carta");

    const respuesta = document.getElementById("respuesta");

    carta.style.display = "none";

    respuesta.style.display = "block";

}


/* =========================
   RECONTRA ACEPTO
========================= */

function recontraAcepto() {

    const carta = document.getElementById("carta");

    const respuesta = document.getElementById("respuesta");

    const final = document.getElementById("final");


    carta.style.display = "none";

    respuesta.style.display = "none";

    final.style.display = "block";


    crearCorazones();

    crearConfeti();

}


/* =========================
   CORAZONES
========================= */

function crearCorazones() {

    for (let i = 0; i < 40; i++) {

        const corazon = document.createElement("div");

        corazon.innerHTML = "❤️";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.top = "100vh";

        corazon.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        corazon.style.zIndex = "999";

        corazon.style.animation =
            "subir 4s linear forwards";

        document.body.appendChild(corazon);


        setTimeout(() => {

            corazon.remove();

        }, 4000);

    }

}


/* =========================
   CONFETI
========================= */

function crearConfeti() {

    const emojis = [
        "🎉",
        "❤️",
        "💕",
        "🌿",
        "✨"
    ];


    for (let i = 0; i < 50; i++) {

        const confeti =
            document.createElement("div");

        confeti.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        confeti.style.position = "fixed";

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.top = "-30px";

        confeti.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confeti.style.zIndex = "1000";

        confeti.style.animation =
            "caer 4s linear forwards";


        document.body.appendChild(confeti);


        setTimeout(() => {

            confeti.remove();

        }, 4000);

    }

}