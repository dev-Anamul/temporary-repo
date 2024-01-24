#include <stdio.h>

void main(void)
{

    char name[30];
    int i = 0;

    printf("Enter a string ( max length 30 ) - ");
    fgets(name, 30, stdin);

    while (name[i])
    {
        if (name[i] >= 'a' && name[i] <= 'z')
            name[i] = name[i] - 32;

        i++;
    }

    printf("Uppercase String is : %s\n", name);
}