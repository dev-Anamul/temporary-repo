#include <stdio.h>

void main()
{
    float a, b, result;

    printf("Pleas input two numbers (4 6.7)\n");
    scanf("%f %f", &a, &b);

    result = a + b;
    printf("%.2f + %.2f = %.2f\n", a, b, result);

    result = a - b;
    printf("%.2f - %.2f = %.2f\n", a, b, result);

    result = a * b;
    printf("%.2f * %.2f = %.2f\n", a, b, result);

    result = a / b;
    printf("%.2f / %.2f = %.2f\n", a, b, result);
}