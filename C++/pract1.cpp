#include <iostream>
 using namespace std;
// int main()
// {
//     int arr[]={73,67,38,33};
//     int arrSize = sizeof(arr)/sizeof(arr[0]);
//     for(int i=0;i<arrSize;i++)
//     {   
//         if(arr[i]>33)
//         {
//         int x=arr[i];
//         int x1=arr[i];
//         while(x%5!=0)
//         {
//             x++;
//         }
//         if(x-x1<3)
//         {
//             cout<<x<<endl;
//         }
//         else
//         {
//             cout<<x1<<endl;
//         }
//         }
//         else
//         {
//             cout<<arr[i];
//         }
       
//     }
//     return 0;
// }
/*class Complex
{
    private:
    int real, imag;
    public:
    Complex () {
        real = imag = 0;
    }
    Complex (int r,int i){
        real = r;
        imag = i;
    }
    void display();
    Complex operator + (Complex c2)
  {   
    Complex rel;
    rel.real = real  + c2.real;
    rel.imag = imag  + c2.imag;
    return rel;
  }
};
void Complex::display()
{
    if(imag < 0)
      cout << "Output Complex number: "<< real << imag << "i";
    else
      cout << "Output Complex number: " << real << "+" << imag << "i";
}
int main()
{
    Complex c1(8,-9), c2(15,5),obj;
    Complex rel=c1+c2;
    obj.display();
    return 0;
    
}
*/

// C++ Program to Demonstrate
// Operator Overloading
#include <iostream>
using namespace std;

class Complex {
private:
	int real, imag;

public:
    Complex(){
        real=imag=0;
    }
	Complex(int r, int i)
	{
		real = r;
		imag = i;
	}

	// This is automatically called when '+' is used with
	// between two Complex objects
	Complex operator+(Complex const& obj)
	{
		Complex res;
		res.real = real + obj.real;
		res.imag = imag + obj.imag;
		return res;
	}
    Complex operator - (Complex const& obj)
	{
		Complex res;
		res.real = real - obj.real;
		res.imag = imag - obj.imag;
		return res;
	}
    Complex operator * (Complex const& obj)
    {
    Complex temp;
    temp.real=(real*obj.real)-(imag*obj.imag);
    temp.imag=(real*obj.imag)+(imag+obj.imag);
    return (temp);
    }
    
	void print() { cout << real << " + " << imag << "i" <<'\n'; }
    void print1() { cout << real << " - " << imag << "i"<<'\n'; }
    void print3() { cout << real << " X " << imag << "i"<<'\n'; }

    friend  istream & operator >> (istream &in, Complex &X)
     {
       cout<<"\n\t Enter real part of complex no: ";
       in>>X.real;
       cout<<"\t Enter imaginary part of complex no: ";
       in>>X.imag;
       return in;
     } 
     friend  ostream & operator << (ostream &out, Complex &X)
     {
       if (X.real==0)
        out<<X.imag<<"i"<<endl;
       else
       if (X.imag==0)
        out<<X.real<<endl;
       else
       out<<X.real<<"+"<<X.imag<<"i"<<endl; 
        
     } 

};

int main()
{
	Complex c1(10, 5), c2(2, 4);
  cout<<"THE NUMNER ARE:"<<endl;
  c1.print1();
  c2.print1();
  cout<<"ADDITION OF COMPLEX NUMBER\n";
	Complex c3 = c1 + c2;
  cout << c3;
  cout<<"SUBSTRACTION OF COMPLEX NUMBER\n";
  Complex c4 = c1 - c2;
  cout << c4;
  cout<<"MULTIPLICATION OF COMPLEX NUMBER\n";
  Complex c5 = c1 * c2;
  cout << c5;
}
