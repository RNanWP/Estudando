#include <stdio.h>

int main()
{
    char operacao;
    float valor1, valor2, resultado;

    printf("Digite o valor inicial: ");
    scanf("%f", &valor1);

    do {
        printf("Digite a operação (+, -, /, *): ");
        scanf(" %c", &operacao);

        printf("Digite o segundo valor: ");
        scanf("%f", &valor2);

        switch(operacao) {
            case '+':
                resultado = valor1 + valor2;
                break;
            case '-':
                resultado = valor1 - valor2;
                break;
            case '/':
                resultado = valor1 / valor2;
                break;
            case '*':
                resultado = valor1 * valor2;
                break;
            default:
                printf("Operação inválida!\n");
                continue;
        }

        printf("Resultado: %.2f\n", resultado);

        printf("Deseja continuar? (s/n): ");
        scanf(" %c", &operacao);

        if (operacao == 's') {
            valor1 = resultado;
        }
    } while (operacao == 's');

    printf("Resultado final: %.2f\n", resultado);

    return 0;
}
