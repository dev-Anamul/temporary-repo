#include <stdio.h>

void main(void)
{
    int a, b;
    char ch = 'c';

    while (ch != 'q')
    {
        printf("Ener two numbers (4 5) - ");
        scanf("%d %d", &a, &b);
        printf("Sum of those number = %d\n", a + b);

        printf("Type c to run again Or type q to terminate - ");
        scanf(" %c", &ch);
    }
}