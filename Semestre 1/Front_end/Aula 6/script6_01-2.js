const lista = ["Arroz","Feijão","Carne","Leite"];
const saida=document.querySelector('.saida');



saida.innerHTML=`${lista} <hr>`;
saida.innerHTML+=`${lista[0]} <br>`;
saida.innerHTML+=`${lista[1]} <br>`;
saida.innerHTML+=`${lista[2]} <br>`;
saida.innerHTML+=`${lista[3]} <br>`;