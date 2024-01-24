#include <stdio.h>
#include <stdbool.h>

void main(void)
{

    int year;
    bool isLeapYear = false;

    printf("Please Enter a Year - ");
    scanf("%d", &year);

    // decisional logic
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        isLeapYear = true;
    }
    else
    {
        isLeapYear = false;
    }

    // print
    if (isLeapYear)
    {
        printf("%d is a leap year.\n", year);
    }
    else
    {
        printf("%d is not a leap year.\n", year);
    }
}