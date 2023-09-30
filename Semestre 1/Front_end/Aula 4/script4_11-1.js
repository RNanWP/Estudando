let a,b,res;
const saida1 = document.querySelector("#saida1");
a=9;
b=10;
res=(a<b);
saida1.innerHTML=`a = ${a} , b = ${b} <br>`;
saida1.innerHTML=`a < b : ${(a<b)} <br>`;
saida1.innerHTML=`!( a < b) : ${!(a<b)}<br>`;
saida1.innerHTML="res : "+typeof(res);
