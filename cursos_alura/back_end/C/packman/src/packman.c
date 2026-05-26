#include "packman.h"
#include "mapa.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include "ui.h"
#include <conio.h>
#include <windows.h>

// Declaração de variáveis globais que serão usadas em todo o programa
MAPA padrao;  // Variável para armazenar o mapa do jogo
POSICAO heroi;  // Variável para armazenar a posição do personagem no mapa
int temPilula = 0;  // Variável para indicar se o personagem tem uma pilula (poder especial)

int praOndeOfantasmaVai(int xatual, int yatual, int* xdestino, int* ydestino) {

    int opcoes[4][2] = {
        {xatual - 1, yatual}, // cima
        {xatual + 1, yatual}, // baixo
        {xatual, yatual - 1}, // esquerda
        {xatual, yatual + 1}  // direita
    };

    int melhordistancia = 9999;
    int encontrou = 0;

    for(int i = 0; i < 4; i++) {

        int novox = opcoes[i][0];
        int novoy = opcoes[i][1];

        if(podeAndar(&padrao, FANTASMA, novox, novoy)) {

            int distancia =
                abs(novox - heroi.x) +
                abs(novoy - heroi.y);

            if(distancia < melhordistancia) {

                melhordistancia = distancia;

                *xdestino = novox;
                *ydestino = novoy;

                encontrou = 1;
            }
        }
    }

    // às vezes anda aleatoriamente
    if(rand() % 100 < 30) {

        for(int i = 0; i < 10; i++) {

            int posicao = rand() % 4;

            int novox = opcoes[posicao][0];
            int novoy = opcoes[posicao][1];

            if(podeAndar(&padrao, FANTASMA, novox, novoy)) {

                *xdestino = novox;
                *ydestino = novoy;

                return 1;
            }
        }
    }

    return encontrou;
}

void fantasmas() {
    MAPA copia;  // Variável para armazenar uma cópia do mapa atual

    copiaMapa(&copia, &padrao);  // Chama a função para copiar

    // Função para movimentar os fantasmas no mapa
    for(int i = 0; i < padrao.linhas; i++) {
        for(int j = 0; j < padrao.colunas; j++) {
            
            if(copia.matriz[i][j] == FANTASMA) {

                int xdestino, ydestino;  // Variáveis para armazenar a posição de destino do fantasma
                int encontrou = praOndeOfantasmaVai(i, j, &xdestino, &ydestino);  // Chama a função para determinar para onde o fantasma vai se mover

                if(encontrou) {  // Verifica se o fantasma encontrou uma posição válida para se mover
                    andaNoMapa(&padrao, i, j, xdestino, ydestino);  // Move o fantasma para a nova posição no mapa
                }
            }
        }
    }
    liberaMapa(&copia);  // Chama a função para liberar a memória alocada para a cópia do mapa
}

int acabou() {
    POSICAO pos;
    int packmanNoMapa = encontraMapa(&padrao, &pos, HEROI);  // Chama a função para encontrar a posição de um herói no mapa
    return !packmanNoMapa;  // Função que verifica se o jogo acabou
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

    if(!podeAndar(&padrao, HEROI, proximox, proximoy)) {
        return;  // Verifica se a próxima posição é válida, caso contrário, retorna sem fazer nada
    }
    
    if(epersonagem(&padrao, PILULA, proximox, proximoy)) {
        temPilula = 1;  // Se o personagem encontra uma pilula, ele ganha a pilula
    }

    andaNoMapa(&padrao, heroi.x, heroi.y, proximox, proximoy);  // Chama a função para mover o personagem no mapa
    heroi.x = proximox;  // Atualiza a posição x do personagem para a próxima posição
    heroi.y = proximoy;  // Atualiza a posição y do personagem para a próxima posição
}

void explodepilula() {

    if (!temPilula) {
        return;  // Verifica se o personagem tem uma pilula, caso contrário, retorna sem fazer nada
    }

    explodepilula2(heroi.x, heroi.y, 0, 1, 3);  // Chama a função para explodir a pilula para cima
    explodepilula2(heroi.x, heroi.y, 1, 0, 3);   // Chama a função para explodir a pilula para baixo
    explodepilula2(heroi.x, heroi.y, 0, -1, 3);  // Chama a função para explodir a pilula para a esquerda
    explodepilula2(heroi.x, heroi.y, -1, 0, 3);   // Chama a função para explodir a pilula para a direita

    temPilula = 0;  // O personagem perde a pilula após usá-la
}

void explodepilula2(int x, int y,int somax, int somay, int qtd) {

    if(qtd == 0) return;

    int novox = x + somax;  // Calcula a próxima posição x para a explosão
    int novoy = y + somay;  // Calcula a próxima posição y para a explosão

    if(!evalida(&padrao, novox, novoy)) return;
    if(eparede(&padrao, novox, novoy)) return;

    padrao.matriz[novox][novoy] = '*';

    gotoxy(0,0);
    imprimeMapa(&padrao);

    Sleep(80);

    padrao.matriz[novox][novoy] = VAZIO;  // Remove a pilula do mapa, deixando o espaço vazio
    explodepilula2(novox, novoy, somax, somay, qtd - 1);  // Chama a função recursivamente para a posição à esquerda da pilula
}

void gotoxy(int x, int y) {

    COORD coord;

    coord.X = x;
    coord.Y = y;

    SetConsoleCursorPosition(
        GetStdHandle(STD_OUTPUT_HANDLE),
        coord
    );
}

int acaboufantasmas() {

    POSICAO pos;

    return !encontraMapa(&padrao, &pos, FANTASMA);
}

int main() {

    CONSOLE_CURSOR_INFO cursor;

    cursor.bVisible = FALSE;
    cursor.dwSize = 1;

    SetConsoleCursorInfo(
    GetStdHandle(STD_OUTPUT_HANDLE),
    &cursor
    );  

    system("cls");

    printf("=====================================\n");
    printf("           PACKMAN EM C             \n");
    printf("=====================================\n");
    printf("\n");
    printf("          APERTE ENTER\n");
    printf("          PARA COMECAR\n");
    printf("\n");
    printf("=====================================\n");

    getch();

    srand(time(0));

    system("cls");

    printf("Carregando");
    Sleep(400);

    printf(".");
    Sleep(400);

    printf(".");
    Sleep(400);

    printf(".");
    Sleep(400);

    system("cls");

    leMapa(&padrao);  // Chama a função para ler o mapa do arquivo
    encontraMapa(&padrao, &heroi, HEROI);  // Chama a função para encontrar a posição do personagem no mapa

    do {

    gotoxy(0, 0);

    imprimeMapa(&padrao);

    printf("Tem pilula? %s\n", temPilula ? "Sim" : "Nao");

    char comando;

    comando = getch();

    if(comando == 'q') {
        break;
    }

    move(comando);

    if(comando == BOMBA) {
        explodepilula();
    }

    fantasmas();

} while(!acabou() && !acaboufantasmas());

  if(acabou()) {

    system("cls");

    printf("\n\n");

    printf("   VOCE PERDEU\n\n");

    printf("      .--.      \n");
    printf("     |o_o |     \n");
    printf("     |:_/ |     \n");
    printf("    //   \\ \\   \n");
    printf("   (|     | )   \n");
    printf("  /'\\_   _/`\\\\ \n");
    printf("  \\___)=(___/   \n");

    printf("\n");
    printf("Os fantasmas venceram...\n");
} else if(acaboufantasmas()) {

    system("cls");

    printf("\n\n");

    printf(" __   __            _    _ _       _ \n");
    printf(" \\ \\ / /           | |  | (_)     | |\n");
    printf("  \\ V /___  _   _  | |  | |_ _ __ | |\n");
    printf("   \\ // _ \\| | | | | |/\\| | | '_ \\| |\n");
    printf("   | | (_) | |_| | \\  /\\  / | | | |_|\n");
    printf("   \\_/\\___/ \\__,_|  \\/  \\/|_|_| |_(_)\n");

    printf("\n");
    printf("Todos os fantasmas foram destruidos!\n");
}

Sleep(3000);


    liberaMapa(&padrao);  // Chama a função para liberar a memória alocada para o mapa
} 