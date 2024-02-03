#include <iostream>
#include <cstring> // Include for strncpy
using namespace std;

class Account {
public:
    char name[30];
    int age;

    void get_info(const char* n, int a) {
        strncpy(name, n, sizeof(name));
        age = a;
    }
};

class PersonalInfo {
public:
    int dob;

    void get_personal_info(int d) {
        dob = d;
    }
};

class AccountDetails {
public:
    int acc_no;
    int curr_balance;
    int deposited;
    int withdraw;
    char ans;

    AccountDetails() : acc_no(0), curr_balance(0), deposited(0), withdraw(0) ,ans(0) {}

    void minor_acc() {
        cout << "\n Input deposited money: ";
        cin >> deposited;
        curr_balance = curr_balance + deposited;
    }

    void major_acc() {
        cout<<"\nDo you want to deposit money or withdraw money?\n Write D for DEPOSIT and W for WITHDRAW : ";
        cin>>ans;

        if(ans=='D'||ans== 'd')
        {
        cout << "\n Input deposited money: ";
        cin >> deposited;
        curr_balance = curr_balance + deposited;
        }
        else if(ans=='w'||ans== 'W'){
            cout << "\n Input withdraw money: ";
        cin >> withdraw;
        curr_balance = curr_balance - withdraw;
        }
        else{ cout <<"WRONG INPUT\n";}

    }

    void get_account_details(int age) {
        if (age < 18) {
            minor_acc();
        }
        else if (age >= 18) {
            major_acc();
        }
    }
};

class TransactionHistory : public Account, public PersonalInfo, public AccountDetails {
public:
    void display() {
        cout << "Name: " << name << endl;
        cout << "Account no: " << acc_no << endl;
        cout << "Account Current Status: " << curr_balance << endl;
    }
};

int main() {
    TransactionHistory o;
    o.get_info("Yashini", 24);
    o.acc_no = 123454577; // Assign an account number
    o.curr_balance = 5000; // Initialize the current balance
    o.display();
    o.get_personal_info(12041999);
    o.get_account_details(o.age);
    o.display();
    return 0;
}
