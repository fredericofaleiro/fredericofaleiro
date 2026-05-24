#define HEROI '@'
#define VAZIO '.'
#define PAREDE_VERTICAL '|'
#define PAREDE_HORIZONTAL '-'

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
void imprimeMapa(MAPA* padrao);
void encontraMapa(MAPA* padrao, POSICAO* p, char c);
int evazia(MAPA* padrao, int x, int y);
int evalida(MAPA* padrao, int x, int y);
void andaNoMapa(MAPA* padrao, int xorigem, int yorigem, int xdestino, int ydestino);

