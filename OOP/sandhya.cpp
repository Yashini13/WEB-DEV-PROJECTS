#include <iostream>
#include <fstream>
#include <string>

using namespace std;

struct Patient {
    string name;
    int age;
    string address;
    string status;
};

void addPatient() {
    ofstream file("patients.txt", ios::app);
    if (!file) {
        cout << "Error opening file!" << endl;
        return;
    }

    Patient patient;
    cout << "Enter patient name: ";
    getline(cin, patient.name);
    cout << "Enter patient age: ";
    cin >> patient.age;
    cin.ignore();
    cout << "Enter patient address: ";
    getline(cin, patient.address);
    cout << "Enter patient status: ";
    getline(cin, patient.status);

    file << patient.name << "," << patient.age << "," << patient.address << "," << patient.status << endl;
    file.close();

    cout << "Patient added successfully!" << endl;
}

void displayPatients() {
    ifstream file("patients.txt");
    if (!file) {
        cout << "Error opening file!" << endl;
        return;
    }

    string line;
    while (getline(file, line)) {
        cout << line << endl;
    }

    file.close();
}

int main() {
    int choice;

    do {
        cout << "COVID Management System" << endl;
        cout << "1. Add Patient" << endl;
        cout << "2. Display Patients" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore();

        switch (choice) {
            case 1:
                addPatient();
                break;
            case 2:
                displayPatients();
                break;
            case 3:
                cout << "Exiting..." << endl;
                break;
            default:
                cout << "Invalid choice! Please try again." << endl;
        }

        cout << endl;
    } while (choice != 3);

    return 0;
}