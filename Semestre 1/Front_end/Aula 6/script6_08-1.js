const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia'];

//for (let var_simples in var_tipo_array)
//for i, pega as posições ou indices do array
for (let i in estudante){
    saida.innerHTML+=`${i} - ${estudante[i]}<br>`;
}