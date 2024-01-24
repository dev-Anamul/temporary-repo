#include <stdio.h>

void main(void)
{
    int a, b;

    printf("Please Enter First Number\n");
    scanf("%d", &a);

    printf("Please Enter Second Number\n");
    scanf("%d", &b);

    if (a > b)
    {
        printf("A is Greater than B\n");
    }
    else if (b > a)
    {
        printf("B is greather than A\n");
    }
    else
    {
        printf("A and B are equal\n");
    }
}