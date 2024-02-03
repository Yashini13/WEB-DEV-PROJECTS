#include <iostream>
#include <fstream>

using namespace std;

int main() {
    char data[100];

    // Writing to the file
    ofstream f("Sample.txt");
    cout << "Writing to the file" << endl;

    cout << "Enter your name: ";
    cin.getline(data, 100);
    f << data << endl;

    cout << "Enter age: ";
    cin >> data;
    cin.ignore(); // to ignore the previously stored value
    f << data << endl;

    f.close();

    // Reading from the file using seekg
    ifstream fr("Sample.txt");
    if (!fr.is_open()) {
        cout << "Error in opening the file for reading." << endl;
        return 1;
    }

    // Set the get pointer to the beginning of the file
    fr.seekg(0, ios::beg);

    // Read data from the file
    fr >> data;
    cout << "Read data using seekg: " << data << endl;

    // Move the get pointer to the beginning of the second line
    fr.seekg(0, ios::beg);
    fr.ignore(100, '\n'); // Ignore the first line

    // Read the second line using getline
    fr.getline(data, 100);
    cout << "Read data using seekg and getline: " << data << endl;

    // Close the file
    fr.close();

    return 0;
}
