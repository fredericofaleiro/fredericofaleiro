#include "ui.h"
#include "mapa.h"
#include <stdio.h>
#include <stdlib.h>

char desenhoparede[4][7] = {
    {"......" },
    {"......" },
    {"......" },
    {"......" }
};

char desenhofantasma[4][7] = {
    {" .-.  " },
    {"| OO| " },
    {"|   | " },
    {"'^^^' " }
};

char desenhoheroi[4][7] = {
    {" .--. "  },
    {"/ _.-'"  },
    {"\\  '-." },
    {" '--' "  }
};

char desenhopilula[4][7] = {
    {"      "},
    {" .-.  "},
    {" '-'  "},
    {"      "}
};

char desenhovazio[4][7] = {
    {"      "},
    {"      "},
    {"      "},
    {"      "}
};

char desenhoexplosao[4][7] = {
    {" **** "},
    {"******"},
    {"******"},
    {" **** "}
};

void imprimeParte(char desenho[4][7], int partes) {
    // Imprime a parte específica do desenho (linha) para cada caractere do mapa
    printf("%s", desenho[partes]);
}

void imprimeMapa(MAPA* padrao) {
    // Loop que percorre cada linha do mapa e a imprime
    for(int i=0; i < padrao->linhas; i++) {

        for(int partes = 0; partes < 4; partes++) {

            for(int j=0; j < padrao->colunas; j++) {
                switch (padrao->matriz[i][j])
                {
                case HEROI:
                    imprimeParte(desenhoheroi, partes);
                    break;

                case FANTASMA:
                    imprimeParte(desenhofantasma, partes);
                    break;

                case PAREDE_HORIZONTAL:
                case PAREDE_VERTICAL:
                    imprimeParte(desenhoparede, partes);
                    break;

                case PILULA:
                    imprimeParte(desenhopilula, partes);
                    break;

                case VAZIO:
                    imprimeParte(desenhovazio, partes);
                    break;
                case '*':
                    imprimeParte(desenhoexplosao, partes);
                    break;

                }
            }
            printf("\n");
        }
    }
}

