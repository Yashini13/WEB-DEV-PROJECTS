#include <iostream>
using namespace std;
class A{
    public:
    void data(int a)
    {
        cout<<a<<endl;
    }
};
class B{
    public:
    void data(int a,int b)
    {
        cout<<a+b<<endl;
    }
};
int main()
{
    A a;
    B b;
    a.data(34);
    b.data(67,1);
    return 0;
}