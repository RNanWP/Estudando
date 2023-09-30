const saida1 = document.querySelector("#saida1");
const saida2 = document.querySelector(".saida2");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
let cor = prompt("Digite uma cor");

body.style.backgroundColor = cor;

h1.innerHTML += " - Aula de hoje";
h1.innerHTML += " "+cor;

h1.style.color = "white";
h1.style.backgroundColor = "blue";

saida1.innerHTML ="Um primeiro teste<br>";
saida1.innerHTML +="Um segundo teste<br>";

saida2.innerHTML ="Outro teste<br>";