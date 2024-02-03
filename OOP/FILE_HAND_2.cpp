#include <iostream>
#include <fstream>

using namespace std;

void file(const string filename, streampos pos, streamsize length) {
    // Open the file in binary mode for reading
    ifstream fr(filename, ios::binary);

    if (!fr.is_open()) {
        cout << "Error in opening the file " << filename << " for reading." << endl;
        return;
    }

    // Set the position using seekg
    fr.seekg(pos);

    char buffer[length];
    fr.read(buffer, length);
    cout << "Read from file " << endl << buffer << endl;

    // Close the file after reading
    fr.close();

    // Open the file in append mode to avoid overwriting existing data
    ofstream fw(filename, ios::app);

    if (!fw.is_open()) {
        cout << "Error in opening the file " << filename << " for writing." << endl;
        return;
    }

    fw << "Pranav this side" << endl;

    // Close the file after writing
    fw.close();
}

int main() {
    file("Sample.txt", 3, 10);
    return 0;
}
