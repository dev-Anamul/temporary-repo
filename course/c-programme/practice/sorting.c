#include <stdio.h>

void main(void)
{
    int nums[] = {6, 5, 3, 7, 8, 2, 1, 9, 8, 6, 4};
    int len = sizeof(nums) / sizeof(nums[0]);

    int i, j, temp;

    for (i = 0; i < len; i++)
    {
        for (j = 0; j < len; j++)
        {
            if (nums[i] < nums[j])
            {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    for (i = 0; i < len; i++)
    {
        printf("%d\t", nums[i]);
    }

    printf("\n");
}