#include <stdio.h>
#include <stdlib.h>
#include "fila.h"
#include <string.h>


void adicionarElemento() {
    char elemento[50];

    if (TAM[TAMANHO_DA_FILA - 1][0] != '\0') {
        printf("Fila cheia! Nao e possivel adicionar mais elementos.\n");
        return;
    }


    printf("digite o elemento a ser adicionado: ");
    scanf("%s", elemento);

    for (int i = 0; i < TAMANHO_DA_FILA; i++) {
        if (TAM[i][0] == '\0') {
            int j = 0;

            while (elemento[j] != '\0') {
            TAM[i][j] = elemento[j];
            j++;
            }

            TAM[i][j] = '\0';
            break;
        }
    }
}

void removerElemento() {

    if (TAM[0][0] == '\0') {
        printf("Fila vazia! Nao e possivel remover elementos.\n");
        return;
    }

    TAM[0][0] = '\0';

    for (int i = 1; i < TAMANHO_DA_FILA; i++) {
        if (TAM[i][0] != '\0') {
            int j = 0;

            while (TAM[i][j] != '\0') {
            TAM[i - 1][j] = TAM[i][j];
            j++;
            }

            TAM[i - 1][j] = '\0';

            TAM[i][0] = '\0';
        } else {
            break;
        }
        
    }
}

void exibirFila() {
    printf("Fila: ");
    for (int i = 0; i < TAMANHO_DA_FILA; i++) {
        if (TAM[i][0] != '\0') {
            printf("%s ", TAM[i]);
        }
    }
    printf("\n");
}

int main() {
    int opcao;

    do {
        printf("=====================================\n");
        printf("           FILA em C                 \n");
        printf("=====================================\n");
        printf("\n");
        printf("          1- ADICIONAR ELEMENTO      \n");
        printf("          2- REMOVER ELEMENTO        \n");
        printf("          3- EXIBIR FILA             \n");
        printf("          4- SAIR                    \n");
        printf("\n");
        printf("=====================================\n");
        scanf("%d", &opcao);

        if (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4) {
            printf("Erro: Digite apenas numeros inteiros!\n");
            while (getchar() != '\n'); 
            continue; 
        }

        switch (opcao) {
            case 1:
                adicionarElemento();
                break;
            case 2:
                removerElemento();
                break;
            case 3:
                exibirFila();
                break;
            case 4:
                printf("Saindo...\n");
                break;
        }
    } while (opcao != 4);
}