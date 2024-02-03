#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{ 
  fork();
  fork();
  fork();
 printf("HELLO!");
  pid_t p = fork();
  if(p<0)
  {
    printf("process_id had error %d",getpid());
    exit(1);
  }
  else if(p==0)
  {
    printf("process id created : %d",get_pid());
  }
  else if(p>0)
  {
    printf("process id created : %d",get_pid());
  }
  return 0;
}

// #include <stdio.h>
// #include <sys/types.h>
// #include <unistd.h>

// int main()
// {
//   fork();
//   fork();
//   fork();
//  printf("HELLO!");
//  return 0;
// }