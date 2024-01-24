#include <stdio.h>

void main(void)
{
    int a = 5;
    int *p;
    p = &a;

    int **q = &p;
    int ***r = &q;
    int ****s = &r;

    printf("a = %d\n", a);
    printf("p = %p\n", p);
    printf("p value = %d\n", *(p + 1));
    printf("sizeof(int) = %lu\n", sizeof(int));

    printf("q = %p\n", q);
    printf("q value = %p\n", *q);
    printf("q value = %d\n", **q);

    printf("r = %p\n", r);
    printf("r value = %p\n", *r);
    printf("r value = %p\n", **r);
    printf("r value = %d\n", ***r);

    printf("s = %p\n", s);
    printf("s value = %p\n", *s);
    printf("s value = %p\n", **s);
    printf("s value = %p\n", ***s);
    printf("s value = %d\n", ****s);

    int values[5] = {1, 2, 3, 4, 5};
    printf("values = %p\n", values);
    printf("values 1 reference = %p\n", values + 1);
}