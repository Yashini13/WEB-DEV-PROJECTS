#include <iostream>
using namespace std;

class per_info{
  public:
  string name;
  long int num;
  per_info()
  {
    name='XYZ';
    num=45;
  }

};
class salary{
   public:
   int salary_emp;
   salary()
   {
    salary_emp=000;
   }

};
class history{
   public:
   string history_emp;
   history(){
    history_emp="none";
   }
};
class emp_info: public per_info, public salary , public history{
  public:
  void get_info();
  void show_info();
};

void emp_info :: get_info()
{
    cout<<"ENTER THE NAME OF EMPLOYEE : ";
    cin>>name;
    cout<<"\nENTER THE PHONE NUMBER OF EMPLOYEE: ";
    cin>>num;
    cout<<"\nENTER SALARY OF EMPLOYEE: ";
    cin>>salary_emp;
    cout<<"\nENTER THE LAST COMPANY OF EMPLOYEE:";
    cin>>history_emp;
}
void emp_info::show_info()
{
    cout<<"NAME :"<<name<<endl;
    cout<<"CONTACT NUMBER: "<<num<<endl;
    cout<<"PRESENT SALARY: "<<salary_emp<<endl;
    cout<<"LAST COMPANY: "<<history_emp<<endl;
}
int main()
{
   emp_info E;
   E.get_info();
   E.show_info();
   return 0;

}
//KVDESPANDE_COMP@JSPMRSCOE.EDU.IN
