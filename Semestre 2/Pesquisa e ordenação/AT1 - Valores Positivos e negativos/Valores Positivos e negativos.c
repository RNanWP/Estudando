#include <stdio.h>

int main() {
    float valor, soma = 0;
    int num_positivos = 0, num_negativos = 0, num_valores = 0;

    printf("Digite os valores (digite 0 para encerrar):\n");

    while (1) {
        scanf("%f", &valor);

        if (valor == 0) {
            break;
        }

        soma += valor;
        num_valores++;

        if (valor > 0) {
            num_positivos++;
        } else if (valor < 0) {
            num_negativos++;
        }
    }

    if (num_valores > 0) {
        float media = soma / num_valores;
        float percent_positivos = (float)num_positivos / num_valores * 100;
        float percent_negativos = (float)num_negativos / num_valores * 100;

        printf("\nMedia dos valores lidos: %.2f\n", media);
        printf("Quantidade de valores positivos: %d\n", num_positivos);
        printf("Quantidade de valores negativos: %d\n", num_negativos);
        printf("Percentual de valores positivos: %.2f%%\n", percent_positivos);
        printf("Percentual de valores negativos: %.2f%%\n", percent_negativos);
    } else {
        printf("Nenhum valor foi digitado.\n");
    }

    return 0;
}
