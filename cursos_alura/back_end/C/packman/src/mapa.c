#include "mapa.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void copiaMapa(MAPA* destino, MAPA* origem) {
    destino->linhas = origem->linhas;  // Copia o número de linhas do mapa de origem para destino
    destino->colunas = origem->colunas;  // Copia o número de colunas do mapa de origem para destino
    
    alocaMapa(destino);  // Aloca memória para o mapa de destino
    for(int i=0; i < origem->linhas; i++) {
        strcpy(destino->matriz[i], origem->matriz[i]);  // Copia cada linha do mapa de origem para destino
    }
}

void andaNoMapa(MAPA* padrao, int xorigem, int yorigem, int xdestino, int ydestino) {

    char personagem = padrao->matriz[xorigem][yorigem];
    padrao->matriz[xdestino][ydestino] = personagem;
    padrao->matriz[xorigem][yorigem] = VAZIO;  
}

int evalida(MAPA* padrao, int x, int y) {
    if(x >= padrao->linhas ||
        x < 0 ||
        y >= padrao->colunas ||
        y < 0) {
        return 0;  // verifica se a próxima posição é válida (dentro dos limites do mapa e se é um espaço vazio), caso contrário, retorna 0
    }
    return 1;  // retorna 1 se a próxima posição é válida
}

int evazia(MAPA* padrao, int x, int y) {
    if(padrao->matriz[x][y] != VAZIO) {
        return 0;  // verifica se a próxima posição é vazia (representada por '.'), caso contrário, retorna 0
    }
    return 1;  // retorna 1 se a próxima posição é vazia
}

int eparede(MAPA* padrao, int x, int y) {
    return
    padrao->matriz[x][y] == PAREDE_HORIZONTAL ||
    padrao->matriz[x][y] == PAREDE_VERTICAL;
        
}

int epersonagem(MAPA* padrao,char personagem, int x, int y) {
    return
    padrao->matriz[x][y] == personagem;
}

int podeAndar(MAPA* padrao, char personagem, int x, int y) {

    if(
        !evalida(padrao, x, y) ||
        eparede(padrao, x, y)
    ) {
        return 0;
    }

    char destino = padrao->matriz[x][y];

    // herói não pode entrar no fantasma
    if(personagem == HEROI && destino == FANTASMA) {
        return 0;
    }

    // fantasma não pode entrar em outro fantasma
    if(personagem == FANTASMA && destino == FANTASMA) {
        return 0;
    }

    return 1;
}

int encontraMapa(MAPA* padrao, POSICAO* p, char c) {
    // Loop que percorre o mapa para encontrar a posição do caractere 'c'
    for(int i=0; i < padrao->linhas; i++) {
        for(int j=0; j < padrao->colunas; j++) {
            if(padrao->matriz[i][j] == c) {  // Verifica se o caractere na posição (i, j) é 'c'
                p->x = i;  // Armazena a linha do caractere encontrado
                p->y = j;  // Armazena a coluna do caractere encontrado
                return 1;  // Sai da função após encontrar o caractere
            }
        }
    }
    return 0;  // Retorna 0 se o caractere 'c' não for encontrado no mapa
}

void liberaMapa(MAPA* padrao) {
    // Loop que libera a memória alocada para cada linha
    for(int i=0; i < padrao->linhas; i++) {
        free(padrao->matriz[i]);  // Libera cada string individualmente
    }
    
    // Libera a memória do array de ponteiros (a matriz em si)
    free(padrao->matriz);
}

void alocaMapa(MAPA* padrao) {
    // Aloca memória para um array de ponteiros (cada linha será uma string)
    padrao->matriz = malloc(sizeof(char*) * padrao->linhas);
    
    // Loop que aloca memória para cada linha individualmente
    for(int i=0; i < padrao->linhas; i++) {
        // Aloca espaço para cada string (colunas + 1 para o caractere nulo '\0')
        padrao->matriz[i] = malloc(sizeof(char) * (padrao->colunas + 1));
    }
}

void leMapa(MAPA* padrao) {
    // Declaração de um ponteiro para arquivo
    FILE* f; 
    
    // Abre o arquivo "mapa.txt" em modo leitura ("r")
    f = fopen("mapa.txt", "r");
    
    // Verifica se o arquivo foi aberto com sucesso
    if (f == NULL) {
        printf("Erro ao abrir o arquivo!");
        exit(1);  // Encerra o programa com código de erro
    }

    // Lê os dois primeiros números do arquivo (linhas e colunas)
    fscanf(f, "%d %d", &padrao->linhas, &padrao->colunas);

    alocaMapa(padrao);  // Chama a função para alocar memória para o mapa

    // Loop que lê cada linha do arquivo e a armazena no mapa
    for(int i=0; i < padrao->linhas; i++) {
        // Lê uma string inteira da linha i do arquivo
        fscanf(f, "%s", padrao->matriz[i]);
    }

    // Fecha o arquivo para liberar o recurso
    fclose(f);
}