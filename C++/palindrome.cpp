#include <iostream>
using namespace std;
int pal(string s, int length)
{
    
    int flag=0;
    for(int i=0;i<length;i++)
    {
        if(s[i]!=s[length-i-1])
        flag=1;
    }
    return flag;

}    
int main()
{
    string s="ollo";
    int l= s.length();
    
    int k=pal(s,l);
    if(k==0)
      cout<<"string is a palindrome";
    else
      cout<<"atring is not a palinfrome"  ;

      return 0;
}