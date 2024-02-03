#include <iostream>
using namespace std;
//Synchronous catch 
// int main()
// {
//     int x;
//     cout<<"Enter x: ";
//     cin>>x;
//     try 
//     {
//         if(x<=-3)
//          throw (x);
//         else 
//     {
//         cout<<"x is good to go";
//     } 
//     }
    
//     catch(int c)
//     {
//         cout<<"Exception caught "<<c;
//     }
//     return 0;
// }

//<-----Default catch----->

// int main()
// { 
//     try 
//     {
//         throw  1;
//     }
//     catch(char *ex)
//     {
//         cout<<"Caught exception \n";
//     }
//     catch(...)
//     {
//         cout<<"Default Exception\n";
//     }
//     return 0;
// }

// <-----Multiple Exceptions ---------->

// void test(int a , int b)
// {
//     int c = a-b;
//     try{
//         cout<<"\nIn try block\n"<<c;
//         if(c<0)
//         {
//             throw (b);
//         }
//         else if(c>0)
//         {
//             throw(a);
//         }


//     }
//     catch(int ans)
//     {   cout<<"\nIn Catch 2";
//         cout<<"Process is good to go!";
//     }
//     catch(int ans)
//     {   cout<<"\nIn Catch 1";
//         cout<<"\nC is negative " << b << " should come before "<<a;
//     }
    

// }

// int main()
// {
//     cout<<"\nIn main"<<endl;
//     test(5,1);
//     return 0;
// }

//<--------Rethrowing exception------->

// void prac()
// {
//     try
//     {
//        throw "hello";
//     }
//     catch(const char*)
//     {
//         cout<<"\nCaught exception \n";
//         throw ;//Rethrowing the exception into main
//     }
// }
// int main()
// {
//     cout<<"\nMain Start";
//     try{
//         prac();
//     }
//       catch(const char*)
//       {
//         cout<<"\nCaught exception inside main";
//       }
//       cout << "\n main end\n";
// }

//<------Standard library Functions------->

#include <exception>

int main()
{
    try{
        int *myarray = new int[100];
    }

catch(exception &e)
{
    cout<<"Standard exception "<<e.what()<<endl;
}
return 0;
}
