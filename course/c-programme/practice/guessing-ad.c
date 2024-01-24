#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

void main(void)
{
    int picked, guess;
    time_t t;

    int chance = 5;
    bool isLoss = true;

    while (chance > 0)
    {
        // take input from the user
        printf("Guess the lucky number between 1 to 100 (%d) - ", chance);
        scanf("%d", &guess);

        // generate a random number
        srand((unsigned)time(&t));
        picked = rand() % 100 + 1;

        // reduce chance
        chance--;

        // comapre random number with user input
        if (guess == picked)
        {
            printf("Congratulations!, You choose the currect number.\n");
            isLoss = false;
            break;
        }
    }

    if (isLoss)
    {
        printf("You loss. Our lucky number is - %d.\n", picked);
    }
}