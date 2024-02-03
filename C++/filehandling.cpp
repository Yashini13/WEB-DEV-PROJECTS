#include<iostream>
#include<fstream>
#include<cstring>
using namespace std;

class telephone
{
public:
    char phone_no[100];
    char name[100];

    // Function to accept name and Phone number from user

    void getdata()
    {
        cout<<"Enter your name here : ";
        cin>>name;
        cout<<"Enter your Phone number here : ";
        cin>>phone_no;
    }
};

int main()
{
    int choice;
    char ans;
    static int i=0;
    telephone t[100];
    fstream file;

    do{
    cout<<"***MAIN MENU***\n"
        <<"1. Enter your Phone number in directory\n"
        <<"2. Display telephone directory\n"
        <<"3. Search your name in Directory\n"
        <<"4. Update your contact number\n"
        <<"Enter which operation you want to perform : ";
        cin>>choice;

        switch(choice)
        {
        case 1:         // Case to enter user name and phone number
            file.open("Directory.txt", ios::app);
            t[i].getdata();
            file.write(reinterpret_cast <char*> (&t[i]), sizeof(t[i]));
            i++;        // writing user name and phone number by writing a object into it
            break;

        case 2:         // Function to display the directory
            file.open("Directory.txt");
            cout<<"Telephone Directory\n"
                <<"Name \t\t Phone Number\n";

            for(int j=0;j<i;j++)
            {
                file.read(reinterpret_cast <char*> (&t[j]), sizeof(t[j]));
                cout<<t[j].name<<"\t"<<t[j].phone_no<<endl;
            }       // displaying the telephone directory by reading the objects
            break;

        
    }
        cout<<"Do you want to continue (y/n) : ";
        cin>>ans;

    }while(ans == 'y');
    return 0;
}