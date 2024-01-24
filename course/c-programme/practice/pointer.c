#include <stdio.h>
#include <stdlib.h>

void main()
{
    int a = 10;
    int b = 20;

    printf("a = %d\n", a);
    printf("b = %d\n", b);

    int *ptr = &a;
    *ptr = 100;

    printf("a = %d\n", a);
    printf("b = %d\n", b);

    int *ptr2 = (int *)malloc(5 * sizeof(int));
}