#include <stdio.h>

void main(void)
{
    int my_array[5] = {3, 4, 5, 3, 2};

    int sum = 0;
    for (int i = 0; i < 5; i++)
    {
        sum += my_array[i];
    }

    printf("%d\n", sum);
}