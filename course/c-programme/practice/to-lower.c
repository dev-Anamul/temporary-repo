#include <stdio.h>

void main(void)
{
    char str[30];
    int i = 0;

    printf("Enter a Uppercase string ( max length 30 char) - ");
    fgets(str, 30, stdin);

    while (str[i])
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] = str[i] + 32;
        i++;
    }

    printf("Lowercase string is - %s\n", str);
}