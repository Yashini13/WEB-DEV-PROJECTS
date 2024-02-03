#include <iostream>
using namespace std;


//<-----Function template-------->


// template <typename T>
// T getMax( T a , T b)
// {
//     T result ;
//     return (a>b)?a:b ;
// }
// int main()
// {
//     int a=56,b=67;
    
//     cout<<getMax<int>(a,b);
//     cout<<getMax<char>('g','e');
//     return 0;
// }

//<-----Class Template----->

template <class Y>
class myPrac{
Y a,b;
public:
 myPrac(Y first, Y second)
 {
    a=first;
    b=second;
 }
   Y getmax();
};
template <class Y> Y myPrac <Y> :: getmax()
{
    Y r;
    r = (a>b)?a:b;
    return r;
}
int main()
{
    myPrac<int> obj(100,45);
    cout<<obj.getmax();
}

