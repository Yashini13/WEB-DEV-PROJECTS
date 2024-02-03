// #include <iostream>
// #include <cstring>
// using namespace std;

// class per_info
// {
//     string adr, dob;
//     long int mob_no, pin_code;

// public:
//     per_info();           // default constructor;
//     per_info(const per_info &); // copy constructor
//     ~per_info()           // destructor
//     {
//         cout << ("\nDestructor Called!\nRecord Deleted Successfully\n");
//     }
//     friend class customer;
// };

// class customer
// {
//     string name, gender;
//     string city;
//     int cus_id;
//     static int cnt;

// public:
//     void create(per_info &);
//     void display(per_info &);
//     inline static void inc_cnt()
//     {
//         cnt++;
//     }
//     inline static void show_cnt()
//     {
//         cout << "\nTotal No. of Records are:\n" << cnt;
//     }

//     customer()
//     {
//         name = "ADHIRA WAGH";
//         gender = "FEMALE";
//         city = "Kasauli";
//         cus_id = 234509;
//     } // DEFAULT CONSTRUCTOR

//     customer(const customer &);
//     ~customer()
//     {
//         cout << ("\nDestructor Called!\nRecord Deleted Successfully\n");
//     }
// };

// int customer::cnt = 0;

// per_info::per_info()
// {
//     adr = "APT-13 Suryamukhi Shanti Nagar Sector-6 Kasauli";
//     pin_code = 133378;
//     mob_no = 2345782229;
// }

// customer::customer(const customer &obj)
// {
//     this->name = obj.name;
//     this->gender = obj.gender;
//     this->city = obj.city;
//     this->cus_id = obj.cus_id;
// }

// per_info::per_info(const per_info &obj)
// {
//     adr = obj.adr;
//     pin_code = obj.pin_code;
//     mob_no = obj.mob_no;
// }

// void customer::create(per_info &obj)
// {
//     cout << "\n*********" << endl;
//     cout << "<<<ENTER CUSTOMER DATABASE>>>" << endl;
//     cout << "\nNAME: ";
//     cin.ignore(); // Consume newline character in the buffer
//     getline(cin, name);
//     cout << "\nGENDER: ";
//     getline(cin, gender);
//     cout << "\nCUSTOMER ID: ";
//     cin >> cus_id;
//     cout << "\nMOBILE NO: ";
//     cin >> obj.mob_no;
//     cout << "\nCITY: ";
//     cin.ignore(); // Consume newline character in the buffer
//     getline(cin, city);
//     cout << "\nADDRESS: ";
//     getline(cin, obj.adr);
//     cout << "\nPIN CODE: ";
//     cin >> obj.pin_code;
// }

// void customer::display(per_info &obj)
// {
//     cout << "\n*********" << endl;
//     cout << "DISPLAY CUSTOMER DATABASE:>>" << endl;
//     cout << "\nNAME OF CUSTOMER : " << name << endl;
//     cout << "\nGENDER OF CUSTOMER : " << gender << endl;
//     cout << "\nCUSTOMER ID: " << cus_id << endl;
//     cout << "\nMOBILE NUMBER : " << obj.mob_no << endl;
//     cout << "\nCITY OF CUSTOMER: " << city << endl;
//     cout << "\nADDRESS OF CUSTOMER: " << obj.adr << endl;
//     cout << "\nPIN CODE: " << obj.pin_code << endl;
//     cout << "\n*********" << endl;
// }

// int main()
// {
//     int n, ch;
//     char ans;
//     cout << "\n ENTER NO.OF CUSTOMER INFO TO BE ENTERED\n";
//     cin >> n;
//     cout << "\n***********************\n";
//     customer *cobj = new customer[n];
//     per_info *pobj = new per_info[n];
//     cout << "\n Menu \n 1. Create Database \n 2. Display Databse \n 3. Copy Constructor\n 4. Default Constructor \n 5. Delete (Destructor)";
//     do
//     {
//         cout << "\n Enter your Choice: ";
//         cin >> ch;
//         switch (ch)
//         {
//         case 1: // create database
//             {
//                 for (int i = 0; i < n; i++)
//                 {
//                     cobj[i].create(pobj[i]);
//                     cobj[i].inc_cnt();
//                 }
//             }
//             break;
//         case 2:
//             {
//                 cobj[0].show_cnt(); // to display the total count of students
//                 // we can use any object of student class as it is a static member function
//                 for (int i = 0; i < n; i++)
//                 {
//                     cobj[i].display(pobj[i]);
//                 }
//             }
//             break;
//         case 3: // Copy Constructor
//             {
//                 customer obj1;
//                 per_info obj2;
//                 obj1.create(obj2);
//                 customer obj3(obj1); // invoking copy constructor of student info to copy contents from object 1 to 3
//                 per_info obj4(obj2); // invoking copy constructor of personal info to copy contents from object 2 to 4
//                 cout << "\n Copy Constructor is called ";
//                 obj3.display(obj4);
//             }
//             break;
//         case 4: // Default Constructor
//             {
//                 customer obj1; // obj1 is invoking the default constructor of class student
//                 per_info obj2; // obj2 is invoking the default constructor of class personal
//                 cout << "\n Default Constructor is called ";
//                 obj1.display(obj2);
//             }
//             break;

//         case 5: // Destructor is called
//             delete[] cobj; // invoking destructor and delete cobj dynamically
//             delete[] pobj; // invoking destructor and delete pobj dynamically
//             break;

//         default:
//             cout << "\n WRONG CHOICE\n";
//         }
//         cout << "\n Want to continue:(y/n)";
//         cin >> ans;
//     } while (ans == 'y');
//     return 0;
// }
#include <iostream>
#include <vector>

class Solution {
public:
    bool allEqual(const std::vector<int>& arr) {
        for (size_t i = 1; i < arr.size(); ++i) {
            if (arr[i] != arr[0]) {
                return false;
            }
        }
        return true;
    }

    int reductionOperations(std::vector<int>& nums) {
        int cnt = 0;
        while (!allEqual(nums)) {
            cnt++;
            int max = 0;
            int i = 0;

            for (size_t j = 0; j < nums.size(); ++j) {
                if (nums[j] > max) {
                    max = nums[j];
                    i = j;
                } else if (nums[j] == max) {
                    if (i < j) {
                        max = nums[i];
                    } else if (i > j) {
                        i = j;
                        max = nums[i];
                    }
                }
            }

            // Second largest element
            int sec_max = 0;
            for (int k = nums.size() - 2; k >= 0; --k) {
                if (nums[k] != nums[nums.size() - 1]) {
                    sec_max = nums[k];
                    break;
                }
            }

            // Example: Decrement each element by 1
            for (size_t k = 0; k < nums.size(); ++k) {
                nums[k]--;
            }
        }

        return cnt;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {3, 2, 1};
    int result = solution.reductionOperations(nums);

    std::cout << "Number of iterations: " << result << std::endl;

    return 0;
}

