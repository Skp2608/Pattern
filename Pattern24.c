#include<stdio.h>
#include<conio.h>
int main()
{
int n, s, x, y;
printf("Enter number of rows to show star pattern: ");
scanf("%d",&n);
for(x = 1; x <= n; x++)
{
//for loop to put space
for(s = x; s < n; s++)
printf(" ");
//for loop for displaying star
for(y = 1; y <= x; y++)
printf("* ");
// ending line after each row
printf("\n");
}
return 0;
}
