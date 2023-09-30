const saida=document.querySelector('.saida');
const produto=["monitor","teclado","mouse"];

for(let j in produto){
    //j++;
    j=parseInt(j);
    saida.innerHTML+=`< h${j+1}>${produto[j]}< /h${j+1}>`;
}