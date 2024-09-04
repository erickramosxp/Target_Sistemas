#include <stdio.h>
#include <stdlib.h>

int fibonacci(int nb)
{
    if (nb < 2)
        return (nb);
    return ((fibonacci(nb - 1)  + fibonacci(nb - 2)));
}


int main(int argc, char **argv)
{
    int nb;
    int result;
    int i;

    if (argc < 2)
        return (1);
    result = 0;
    i = 0;
    nb = atoi(argv[1]);
    while (result < nb)
    {
        result = fibonacci(i);
        printf("%d\n", result);
        i++;
    }
    if (result == nb)
        printf("O número informado faz parte da sequencia de fibonacci\n");
    else
        printf("O número informado não faz parte da sequencia de fibonacci !\n");
    return (0);
}