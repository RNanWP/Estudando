let x, y ,z;
y=3;
z=5;
x = 2 * (y + z);//x=2*(3+5)//x=2*8//x=16
txt="O valor de X é igual: " + x + "<br>";
document.write ("x = ",x, "<br>");//separado por ,
document.write ("x = "+x+"<br>");//cancatenação, juntando
document.write (`x = ${x}<br>`);//
document.write (`O valor de Y é igual a: ${y} <br>`);// Crase usada para escrever qualquer coisa
document.write (txt);