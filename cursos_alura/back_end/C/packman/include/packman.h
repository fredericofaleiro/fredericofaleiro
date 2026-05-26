#ifndef _PACKMAN_H_
#define _PACKMAN_H_

#define CIMA 'w'
#define BAIXO 's'
#define ESQUERDA 'a'
#define DIREITA 'd'
#define BOMBA 'b'

void move(char direcao);
int acabou();
int edirecao(char direcao);
void fantasmas();
int praOndeOfantasmaVai(int xatual, int yatual, int* xdestino, int* ydestino);
void explodepilula();
void explodepilula2(int x, int y,int somax, int somay, int qtd);
void gotoxy(int x, int y);
int acaboufantasmas();

#endif