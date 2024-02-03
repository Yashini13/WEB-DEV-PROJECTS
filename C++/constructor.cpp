// #include <iostream>
// using namespace std;
// // built student in fo from construcctor copy contuctor inline function, friend function, static variable 
// class student ;

// class per_info
// {
//   private:
//   string dob;
//   public:
//   string name, rollno;
//   per_info()
//   {
//     name='YASHINI';
//     rollno = 31;
//   }
//   per_info( string n, int r)
//   {
//     name=n;
//     rollno=r;
//   }
//   friend void getinfo(per_info)
//   {

//   }
//    friend void putinfo(per_info)
//   {

//   }
//   inline void dob()
//   {
    
//     cout<<"enter DOB";
//     cin>>dob;
//     cout<<"\nthis is an inline function\n";
//   }

// };
// class student{
//    private:
//    string add;
//    int pin;
//    student ()
//    {
//     add="xyz";
//     pin=0;
//    }
//  void getinfo( per_info &s )
//  {
//       cout<<"NAME:";
//       cin>>s.name;
//       cout<<"\nROLL_NO:";
//       cin>>s.rollno;
//       cout<<"\nADDRESS: ";
//       cin>>add;
//       cout<<"\nPIN";
//       cin>>pin;
//  }
//  void putinfo(per_info &s)
//  {
//     cout<<"NAME:"<<s.name<<endl;
//     cout<<"ROLL NO"<<s.rollno<<endl;
//     cout<<"ADDRESS"<<add<<endl;
//     cout<<"PIN"<<pin<<endl;
//  }
// };
// int main()
// {   student D;
//     per_info P;
//     D.dob();
//     getinfo(P);
//     putinfo(P);
// }
#include <iostream>
using namespace std;

class per_info {
private:
    string dob;

public:
    string name;
    int rollno;

    per_info() {
        name = "YASHINI";
        rollno = 31;
    }

    per_info(string n, int r) {
        name = n;
        rollno = r;
    }

    void getinfo() {
        cout << "Enter DOB: ";
        cin >> dob;
    }

    void putinfo() {
        cout << "NAME: " << name << endl;
        cout << "ROLL NO: " << rollno << endl;
        cout << "DOB: " << dob << endl;
    }
};

class student {
private:
    string add;
    int pin;

public:
    student() {
        add = "xyz";
        pin = 0;
    }

    void getinfo(per_info& s) {
        cout << "NAME: ";
        cin >> s.name;
        cout << "\nROLL_NO: ";
        cin >> s.rollno;
        cout << "\nADDRESS: ";
        cin >> add;
        cout << "\nPIN: ";
        cin >> pin;
    }

    void putinfo(per_info& s) {
        cout << "NAME: " << s.name << endl;
        cout << "ROLL NO: " << s.rollno << endl;
        cout << "ADDRESS: " << add << endl;
        cout << "PIN: " << pin << endl;
    }
};

int main() {
    student D;
    per_info P;
    P.getinfo();
    D.getinfo(P);
    D.putinfo(P);
    P.putinfo();
}
