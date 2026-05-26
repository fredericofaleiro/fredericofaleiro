#ifndef _MAPA_H_
#define _MAPA_H_

#define HEROI '@'
#define VAZIO '.'
#define PAREDE_VERTICAL '|'
#define PAREDE_HORIZONTAL '-'
#define FANTASMA 'F'
#define PILULA 'P'


struct mapa
{
char** matriz;      
int linhas;       
int colunas;      
};

struct posicao
{
int x;
int y;    
};

typedef struct mapa MAPA;
typedef struct posicao POSICAO;

void liberaMapa(MAPA* padrao);
void alocaMapa(MAPA* padrao);
void leMapa(MAPA* padrao);
int encontraMapa(MAPA* padrao, POSICAO* p, char c);
int evazia(MAPA* padrao, int x, int y);
int evalida(MAPA* padrao, int x, int y);
void andaNoMapa(MAPA* padrao, int xorigem, int yorigem, int xdestino, int ydestino);
void copiaMapa(MAPA* destino, MAPA* origem);
int epersonagem(MAPA* padrao,char personagem, int x, int y);
int eparede(MAPA* padrao, int x, int y);
int podeAndar(MAPA* padrao,char personagem, int x, int y);   

#endif