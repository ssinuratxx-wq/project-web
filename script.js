/* ==========================
   BERONED ROLEPLAY
   script.js
========================== */

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.6s";
    }, 1200);
});

// Copy Server IP
function copyIP() {

    const ip = "165.101.18.238:7033";

    navigator.clipboard.writeText(ip);

    alert("IP Server berhasil disalin!\n\n" + ip);

}

// Counter Animation
const counters = document.querySelectorAll(".counter");

const speed = 50;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(update, 30);

        } else {

            counter.innerText = target;

        }

    }

    update();

});

// Navbar Scroll Effect

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 100) {

        nav.style.background = "rgba(5,10,20,.95)";
        nav.style.boxShadow = "0 0 25px rgba(0,212,255,.25)";

    } else {

        nav.style.background = "rgba(0,0,0,.35)";
        nav.style.boxShadow = "none";

    }

});

// Scroll Reveal

const reveals = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight - 120;

    reveals.forEach(sec=>{

        const top = sec.getBoundingClientRect().top;

        if(top < trigger){

            sec.style.opacity="1";
            sec.style.transform="translateY(0px)";

        }

    });

}

reveals.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(60px)";
    sec.style.transition="1s";

});

window.addEventListener("scroll", revealSections);

revealSections();

// Hero Parallax

window.addEventListener("scroll", ()=>{

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.backgroundPosition = `center ${value*0.35}px`;

});

// Smooth Glow Mouse

document.addEventListener("mousemove",(e)=>{

    document.body.style.background =
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(0,212,255,.08),
    #05070d 45%)`;

});

// Console Message

console.log(`
====================================

BERONED ROLEPLAY

Official Website

Developed with ❤️

====================================
`);