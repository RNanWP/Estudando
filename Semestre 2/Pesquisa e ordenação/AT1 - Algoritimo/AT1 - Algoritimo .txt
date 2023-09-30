#include <stdio.h>

int main() {
    int num, qtd_pares = 0, qtd_impares = 0, soma_pares = 0, soma_geral = 0;
    float media_pares, media_geral;
    
    printf("Digite os numeros (digite 0 para encerrar):\n");
    
    while (1) {
        scanf("%d", &num);
        
        if (num == 0) {
            break;
        }
        
        if (num % 2 == 0) { // número par
            qtd_pares++;
            soma_pares += num;
        } else { // número ímpar
            qtd_impares++;
        }
        
        soma_geral += num;
    }
    
    if (qtd_pares > 0) {
        media_pares = (float)soma_pares / qtd_pares;
        printf("\nQuantidade de numeros pares: %d\n", qtd_pares);
        printf("Media dos valores pares: %.2f\n", media_pares);
    } else {
        printf("\nNenhum numero par foi digitado.\n");
    }
    
    media_geral = (float)soma_geral / (qtd_pares + qtd_impares);
    printf("Quantidade de numeros impares: %d\n", qtd_impares);
    printf("Media geral dos numeros lidos: %.2f\n", media_geral);
    
    return 0;
}
