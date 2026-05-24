#include "packman.h"
#include "mapa.h"
#include <stdio.h>
#include <stdlib.h>

// Declaração de variáveis globais que serão usadas em todo o programa
MAPA padrao;  // Variável para armazenar o mapa do jogo
POSICAO heroi;  // Variável para armazenar a posição do personagem no mapa

int acabou() {
    return 0;  // Função que verifica se o jogo acabou
}


int edirecao(char direcao) {
    // Verifica se a direção é válida (w, s, a, d) e retorna 1 (verdadeiro) ou 0 (falso)
    return direcao == 'w' ||
        direcao == 's' ||
        direcao == 'a' ||
        direcao == 'd';
}



void move(char direcao) {
    

    if (!edirecao(direcao)) {
        return;  // Verifica se a direção é válida, caso contrário, retorna sem fazer nada
    }

    int proximox = heroi.x;  // Variável para armazenar a próxima posição x do personagem
    int proximoy = heroi.y;  // Variável para armazenar a próxima posição y do personagem

    switch (direcao)
    {
    case CIMA:
        proximox--;  // Calcula a próxima posição x para cima
        break;
    case BAIXO:
        proximox++;  // Calcula a próxima posição x para baixo
        break;
    case ESQUERDA:
        proximoy--;  // Calcula a próxima posição y para a esquerda
        break;
    case DIREITA:
        proximoy++;  // Calcula a próxima posição y para a direita
        break;
    }

    if(!evalida(&padrao, proximox, proximoy)) {
        return;  // Verifica se a próxima posição é válida, caso contrário, retorna sem fazer nada
    }
    if(!evazia(&padrao, proximox, proximoy)) {
        return;  // Verifica se a próxima posição é vazia, caso contrário, retorna sem fazer nada
    }

    andaNoMapa(&padrao, heroi.x, heroi.y, proximox, proximoy);  // Chama a função para mover o personagem no mapa
    heroi.x = proximox;  // Atualiza a posição x do personagem para a próxima posição
    heroi.y = proximoy;  // Atualiza a posição y do personagem para a próxima posição
}

int main() {

    leMapa(&padrao);  // Chama a função para ler o mapa do arquivo
    encontraMapa(&padrao, &heroi, HEROI);  // Chama a função para encontrar a posição do personagem no mapa

    do {

        imprimeMapa(&padrao);  // Chama a função para imprimir o mapa na tela

        char comando;  // Declaração de uma variável para armazenar o comando do usuário
        scanf(" %c", &comando);  // Lê um comando do usuário (caractere)
        move(comando);  // Chama a função para mover o personagem com base no comando lido

    }while(!acabou());  // Loop que continua enquanto o jogo não acabou


    liberaMapa(&padrao);  // Chama a função para liberar a memória alocada para o mapa
} 