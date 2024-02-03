#include <iostream>
using namespace std;
class abc;
class xyz
{
    int a;

public:
    void set_data(int x)
    {
        a = x;
    }

    friend void display(xyz, abc);
};
class abc
{
    int b;

public:
    void set_data(int x)
    {
        b = x;
    }

    friend void display(xyz, abc);
};

void display(xyz p, abc q)
{
        if (p.a == q.b)
        cout << "greater=" << p.a;  // Fix the typo here
    else
        cout << "greater=" << q.b;  // Fix the typo here
    
}
int main()
{
    abc obj1;
    xyz obj2;
    obj1.set_data(35);
    obj2.set_data(45);
    display(obj2, obj1); ///called or invoked in reverse order first 2 and then 1
}
