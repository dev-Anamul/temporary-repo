#include <stdio.h>

void print(char *c, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%c", *c);
        c++;
    }
    printf("\n");
}

void print2(char *c)
{
    while (*c != '\0')
    {
        printf("%c", *c);
        c++;
    }
    printf("\n");
}

void main(void)
{
    char c[25] = "Hello World!";

    print(c, 25);
    print2(c);
    printf("%lu\n", sizeof(c));
}