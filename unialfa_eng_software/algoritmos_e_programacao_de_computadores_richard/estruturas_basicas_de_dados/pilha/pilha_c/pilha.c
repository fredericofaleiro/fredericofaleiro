#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"
#include <string.h>

void adicionarElemento() {
    for (int i = 0; i < TAMANHO_DA_PILHA; i++) {
        if (strlen(TAM[i]) == 0) {
            printf("Digite um elemento para adicionar: ");
            scanf("%s", TAM[i]);
            printf("Elemento adicionado: %s\n", TAM[i]);
            return;
        }
    }
    printf("Pilha cheia!\n");
}

void removerElemento() {
    for (int i = TAMANHO_DA_PILHA - 1; i >= 0; i--) {
        if (strlen(TAM[i]) != 0) {
            printf("Elemento removido: %s\n", TAM[i]);
            TAM[i][0] = '\0'; // Limpa o elemento
            return;
        }
    }
    printf("Pilha vazia!\n");
}

void exibirPilha() {
    printf("Pilha atual:\n");
    for (int i = TAMANHO_DA_PILHA - 1; i >= 0; i--) {
        if (strlen(TAM[i]) != 0) {
            printf("%s\n", TAM[i]);
        }
    }
}


int main() {
    int opcao;

    do {
        printf("=====================================\n");
        printf("1. Adicionar elemento\n");
        printf("2. Remover elemento\n");
        printf("3. Exibir pilha\n");
        printf("4. Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                adicionarElemento();
                break;
            case 2:
                removerElemento();
                break;
            case 3:
                exibirPilha();
                break;
            case 4:
                printf("Saindo...\n");
                break;
            default:
                printf("Opcao invalida! Tente novamente.\n");
        }
    } while (opcao != 4);

    return 0;
}