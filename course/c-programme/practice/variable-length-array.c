#include <stdio.h>

void main(void)
{
    int size;

    printf("Please enter the length of array - ");
    scanf("%d", &size);

    int nums[size];

    for (int i = 0; i < size; i++)
    {
        scanf("%d", &nums[i]);
    }

    int sum = 0;
    int max = nums[0];

    for (int i = 0; i < size; i++)
    {
        sum += nums[i];
        if (max < nums[i])
            max = nums[i];
    }

    printf("Sum of the array elements - %d\n", sum);
    printf("Max of the array elements - %d\n", max);
    printf("Avg of the array elements - %d\n", sum / size);
}