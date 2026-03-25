#include <stdio.h>
#include <string.h>

void abertura() {
    printf("/****************/\n");
    printf("/ Jogo de Forca */\n");
    printf("/****************/\n\n");
}

void chuta(char chutes[26], int tentativas) {
    char chute;
        printf("qual a letra? ");
        scanf(" %c", &chute);

        chutes[tentativas] = chute;
        tentativas++;
}


int main() {
    char palavra[20];

    sprintf(palavra, "MELANCIA");

    int acertou = 0;
    int enforcou = 0;

    char chutes[26];
    int tentativas = 0;

    abertura();

 do {
        for(int i = 0; i < strlen(palavra); i++) {

            int achou = 0;

            for(int j = 0; j < tentativas; j++) {
                if(chutes[j] == palavra[i]) {
                    achou = 1;
                    break;
                }
            }

            if(achou) {
                printf("%c ", palavra[i]);
            } else {
                printf("_ ");
            }
        }
        printf("\n");

        chuta(chutes, tentativas);
        tentativas++;
} while(!acertou && !enforcou);
}