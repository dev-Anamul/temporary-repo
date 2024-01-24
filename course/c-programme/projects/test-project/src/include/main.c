#include <stdio.h>
#include <stdlib.h>

extern int increment();

int main(void)
{

    printf("increment() = %d\n", increment());
    return 0;
}
