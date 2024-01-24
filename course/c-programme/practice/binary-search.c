#include <stdio.h>

void main(void)
{
    int nums[] = {45, 34, 56, 78, 2, 3, 90, 67, 43, 65};
    int len = sizeof(nums) / sizeof(nums[0]);

    int search_val, i;
    int find_ind = -1;

    printf("Please enter the search value - ");
    scanf("%d", &search_val);

    for (i = 0; i < len; i++)
    {
        if (nums[i] == search_val)
        {
            find_ind = i;
            break;
        }
    }

    if (find_ind != -1)
    {
        printf("%d\n", find_ind);
    }
    else
    {
        printf("No value found\n");
    }
}