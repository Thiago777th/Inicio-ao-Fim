const inicio = new Date("2023-09-10T00:00:00");

function contador(){

const agora = new Date();

const diff = agora - inicio;

document.getElementById("dias").textContent =
Math.floor(diff/86400000);

document.getElementById("horas").textContent =
Math.floor(diff/3600000)%24;

document.getElementById("minutos").textContent =
Math.floor(diff/60000)%60;

document.getElementById("segundos").textContent =
Math.floor(diff/1000)%60;

}

setInterval(contador,1000);
contador();

const mensagem = `
Desde o primeiro momento eu não imaginava
que viveríamos tantas histórias juntos.

Obrigado por cada sorriso,
cada abraço,
cada conversa.

Você transformou dias comuns
em memórias inesquecíveis.

E se eu pudesse escolher novamente,
escolheria você em todas as versões da nossa história.

Eu te amo ❤️
`;

let i = 0;

function digitar(){

if(i < mensagem.length){

document.getElementById("texto").innerHTML += mensagem.charAt(i);

i++;

setTimeout(digitar,40);

}

}

digitar();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add("active");
}

});

});

function criarCoracao(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
Math.random()*4+4+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(criarCoracao,500);