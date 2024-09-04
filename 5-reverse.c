#include <stdio.h>

int ft_strlen(char *s)
{
    int i;

    i = 0;
    while (*s++)
        i++;
    return (i);
}

int main(int argc, char **argv)
{
    int len;
    int i;
    char c;
    char *input;
    if (argc < 2)
        return (1);
    input = argv[1];
    len = ft_strlen(input) - 1;
    while (i < len)
    {
        c = input[i];
        input[i] = input[len];
        input[len] = c;
        i++;
        len--;
    }
    printf("%s\n", input);
}