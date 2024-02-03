#include <iostream>
#include <fstream>

void writeFile() {
    std::ofstream outFile("output.txt");
    if (outFile.is_open()) {
        // Write to the file
        outFile << "Hello, this is written to the file.\n";
        std::cout << "Data written to file.\n";
        outFile.close();
    } else
    {
        std::cout << "Unable to open file for writing.\n";
    }
}

void readFile() {
    std::ifstream inFile("output.txt");
    if (inFile.is_open()) {
        // Read from the file
        std::string line;
        while (getline(inFile, line)) {
            std::cout << "Read from file: " << line << "\n";
        }
        inFile.close();
    } else {
        std::cout << "Unable to open file for reading.\n";
    }
}

int main() {
    int choice;

    std::cout << "Enter your choice:\n";
    std::cout << "1. Write to file\n";
    std::cout << "2. Read from file\n";
    std::cin >> choice;

    switch (choice) {
        case 1:
            writeFile();
            break;

        case 2:
            readFile();
            break;

        default:
            std::cout << "Invalid choice.\n";
            break;    
    }

    return 0;
}
