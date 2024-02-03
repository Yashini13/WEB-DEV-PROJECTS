#include <iostream>
using namespace std;
class A{
    private:
      int value;
    public:
      A(){
        value=4;
         }
      //Operator overloading method 1   
    //   void operator ++ () {
    //     value++;
    //   }  
      //operator ++ used as postfix
      A operator ++ (int){       
        A temp;
        temp.value=value++;
        return temp;
      }
      void display(){
        cout<<value<<endl;
      }
};

int main()
{
    A a,result;
    // result=a++;
    // result.display();
    result= a++;
    result.display();
}