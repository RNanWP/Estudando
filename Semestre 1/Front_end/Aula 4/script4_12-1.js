let a,b,c,d;
a=50;
b=120;
c=200;
saida1.innerHTML=`a = ${a}, b = ${b}, c = ${c} <br>`;
d=(a<=b) && !(a>=c);//
saida1.innerHTML+="(a<=b) && (a>=c) = "+d;