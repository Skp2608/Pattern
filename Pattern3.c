#include<stdio.h>
int main()
{
int i,j,l; 
printf("enter number of rows/columns\n"); 
scanf("%d",&l);
for(i=0;i<l;i++) 
   {
      for(j=0;j<i;j++) 
         {
            printf(" ");
         }
      for(j=0;j<l;j++) 
         {
            printf("*");
         }
      printf("\n");
   }
}
