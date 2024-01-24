#include <stdio.h>

void main(void)
{
    char ch;

    printf("Please Enter a character - ");
    scanf("%c", &ch);

    if (ch >= 'A' && ch <= 'Z')
    {
        printf("Your enter a uppercase character. Lowercase value of this character is - %c\n", ch + 32);
    }
    else if (ch >= 'a' && ch <= 'z')
    {
        printf("Your enter a lowercase chracter. Uppercase value of this character is - %c\n", ch - 32);
    }
    else
    {
        printf("Your enter an invalid character. We can't conver it to uppercase or lowercase.\n");
    }
}