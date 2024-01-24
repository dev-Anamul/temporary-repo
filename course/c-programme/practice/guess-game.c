#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void main(void)
{

    int guess, picked;
    time_t t;

    srand((unsigned)time(&t));
    picked = rand() % 10 + 1;

    printf("Guess a number - ");
    scanf("%d", &guess);

    if (picked == guess)
    {
        printf("Congratulations, You are won.\n");
    }
    else
    {
        printf("Oohh!!!, Your are lose. Our picked number is - %d\n", picked);
    }
}