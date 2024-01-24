#include <stdio.h>
#include <limits.h>

int main(void)
{
    int var1 = INT_MAX;
    int var2 = INT_MIN;

    unsigned int un_var1 = 0;
    unsigned int un_var2 = UINT_MAX;

    int num_char = printf("integer value range %d to %d\n", var2, var1);
    int num_char2 = printf("unsigned integer value range %u to %u\n", un_var1, un_var2);
    printf("%d,%d\n", num_char2, num_char);
    printf("%d\n", printf("%s", "hello word"));
    printf("%10s\n", "hello");

    return 0;
}
