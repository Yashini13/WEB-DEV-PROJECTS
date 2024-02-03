//Hybrid Inheritance
#include <iostream>
using namespace std;

class Student {
protected:
    int roll;

public:
    void getroll();
    void showroll();
};

void Student::getroll() {
    cout << "Enter roll no: ";
    cin >> roll;
}

void Student::showroll() {
    cout << "\nROLL NO: " << roll;
}

class Test : public Student {
protected:
    int m1, m2;

public:
    void getmarks();
};

void Test::getmarks() {
    cout << "\nEnter marks of m1: ";
    cin >> m1;
    cout << "\nEnter marks of m2: ";
    cin >> m2;
}

class Sports {
protected:
    int sp_marks;

public:
    void get_sp_marks() {
        cout << "\nEnter the sports marks: ";
        cin >> sp_marks;
    }
};

class Result : public Test, public Sports {
public:
    void showresult() {
        int t;
        t = sp_marks + m1 + m2;
        cout << "\nTotal = " << t;
    }
};

int main() {
    Result r;
    r.getroll();
    r.getmarks();
    r.get_sp_marks();
    cout << "RESULT" << endl;
    r.showresult();
    return 0;
}
