#include <stdio.h>

void main(void)
{
    int size = 5;
    int user_array[size];

    for (int i = 0; i < size; i++)
    {
        scanf("%d", &user_array[i]);
    }

    int sum = 0;
    int max = user_array[0];

    for (int j = 0; j < size; j++)
    {
        sum += user_array[j];
        if (max < user_array[j])
            max = user_array[j];
    }

    printf("Sum of the user input = %d\n", sum);
    printf("Max of the user input = %d\n", max);
    printf("Avg of the user input = %d\n", sum / size);
}