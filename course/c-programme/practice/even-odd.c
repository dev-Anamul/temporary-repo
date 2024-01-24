#include <stdio.h>

void main(void)
{
    int n;

    printf("Enter an interger number - ");
    scanf("%d", &n);

    if (n % 2 == 0)
    {
        printf("Number %d is even\n", n);
    }
    else
    {
        printf("Number %d is odd\n", n);
    }
}