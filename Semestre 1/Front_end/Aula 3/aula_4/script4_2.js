let a,b;
a=prompt("Digite um numero");//10
a=parseInt(a);//a=10
//a=parseFloat(a);//a=10.5
b=parseInt(prompt("Digite outro número"));//2
document.write (`soma: ${(a+b)} <br>`);
document.write ("subtração: "+ (a-b)+ "<br>");//+ serve para juntar (concatenar)
document.write (`O resultado da multiplicação ${a} * ${b} é = ${a*b} <br>`);
document.write (`O resultado da divisão ${a} / ${b} é = ${a/b} <br>`);
document.write (`O resto da divisão ${a} % ${b} é = ${a%b} <br>`);
document.write (`A esponenciação ${a} ** ${b} é = ${a**b} <br>`);
/*
Desafio:
Mostrar a seguinte saída para o browser
O resultado da multiplicação de 3 * 2 = 6
O número 3 tem que vir da variável a
O número 2 tem que vir da variável b
O número 6 tem que vir da multiplicação a*b

Deafio 2:
Completar com os outros operadores arit
( /, % , ** )
*/