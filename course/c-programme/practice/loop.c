#include <stdio.h>

void main(void)
{

    int width, height;
    int n = 10;

    printf("Pleas ente width and height ( 5 10) - ");
    scanf("%d %d", &width, &height);

    for (int i = 1; i <= height; i++)
    {
        for (int i = 1; i <= width; i++)
        {
            printf("* ");
        }
        printf("\n");
    }
}