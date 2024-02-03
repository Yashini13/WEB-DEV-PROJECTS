// #include <iostream>
// #include <iomanip>
// #include <vector>
// #include <algorithm>
// #include <fstream>

// using namespace std;

// class Product {
// public:
//     string name;
//     int id;
//     double price;
//     int quantity;

//     Product(string n, int i, double p, int q) : name(n), id(i), price(p), quantity(q) {}

//     void displayProduct() const {
//         cout << setw(5) << id << setw(20) << name << setw(10) << price << setw(10) << quantity << endl;
//     }
// };

// class ClothingStore {
// private:
//     vector<Product> inventory;
//     string filename; // File to save/load inventory data

// public:
//     ClothingStore(const string& file) : filename(file) {}

//     void addProduct(const Product& product) {
//         inventory.push_back(product);
//     }

//     void displayInventory() const {
//         cout << setw(5) << "ID" << setw(20) << "Name" << setw(10) << "Price" << setw(10) << "Quantity" << endl;
//         cout << setfill('-') << setw(45) << "" << setfill(' ') << endl;

//         for (const auto& product : inventory) {
//             product.displayProduct();
//         }
//     }

//     Product* findProductById(int productId) {
//         auto it = find_if(inventory.begin(), inventory.end(), [productId](const Product& p) {
//             return p.id == productId;
//         });

//         if (it != inventory.end()) {
//             return &(*it);
//         } else {
//             return nullptr;
//         }
//     }

//     void sellProduct(int productId, int quantity) {
//         Product* product = findProductById(productId);

//         if (product != nullptr && product->quantity >= quantity) {
//             product->quantity -= quantity;
//             cout << "Sold " << quantity << " units of " << product->name << " for a total of $" << (product->price * quantity) << endl;
//         } else {
//             cout << "Product not found or insufficient quantity." << endl;
//         }
//     }

//     void saveInventoryToFile() const {
//         ofstream outFile(filename);

//         if (outFile.is_open()) {
//             for (const auto& product : inventory) {
//                 outFile << product.name << ' ' << product.id << ' ' << product.price << ' ' << product.quantity << '\n';
//             }

//             cout << "Inventory saved to file: " << filename << endl;
//         } else {
//             cerr << "Unable to open file for writing." << endl;
//         }
//     }

//     void loadInventoryFromFile() {
//         ifstream inFile(filename);

//         if (inFile.is_open()) {
//             inventory.clear(); // Clear existing inventory

//             string name;
//             int id, quantity;
//             double price;

//             while (inFile >> name >> id >> price >> quantity) {
//                 addProduct(Product(name, id, price, quantity));
//             }

//             cout << "Inventory loaded from file: " << filename << endl;
//         } else {
//             cerr << "Unable to open file for reading. Creating a new inventory." << endl;
//         }
//     }

//     void addNewProduct() {
//         string name;
//         double price;
//         int quantity;

//         cout << "Enter product name: ";
//         cin >> name;
//         cout << "Enter product price: ";
//         cin >> price;
//         cout << "Enter product quantity: ";
//         cin >> quantity;

//         int newId = inventory.empty() ? 1 : (inventory.back().id + 1);
//         addProduct(Product(name, newId, price, quantity));

//         cout << "Product added to the inventory.\n";
//     }
// };

// int main() {
//     ClothingStore store("inventory.txt");
//     store.loadInventoryFromFile(); // Load inventory data from file

//     int choice;
//     do {
//         cout << "\nClothing Store Management System\n";
//         cout << "1. Display Inventory\n";
//         cout << "2. Sell Product\n";
//         cout << "3. Save Inventory to File\n";
//         cout << "4. Add New Product\n";
//         cout << "5. Exit\n";
//         cout << "Enter your choice: ";
//         cin >> choice;

//         switch (choice) {
//             case 1:
//                 store.displayInventory();
//                 break;

//             case 2:
//                 int productId, quantity;
//                 cout << "Enter product ID: ";
//                 cin >> productId;
//                 cout << "Enter quantity: ";
//                 cin >> quantity;

//                 store.sellProduct(productId, quantity);
//                 break;

//             case 3:
//                 store.saveInventoryToFile();
//                 break;

//             case 4:
//                 store.addNewProduct();
//                 break;

//             case 5:
//                 cout << "Exiting the program.\n";
//                 break;

//             default:
//                 cout << "Invalid choice. Please try again.\n";
//         }
//     } while (choice != 5);

//     return 0;
// }

#include <iostream>
#include <iomanip>
#include <vector>
#include <algorithm>
#include <fstream>

using namespace std;

class MovieTicket {
public:
    string movieName;
    int ticketId;
    double price;
    int availableSeats;

    MovieTicket(string n, int id, double p, int seats) : movieName(n), ticketId(id), price(p), availableSeats(seats) {}

    void displayTicket() const {
        cout << setw(5) << ticketId << setw(20) << movieName << setw(10) << price << setw(10) << availableSeats << endl;
    }
};

class TicketBookingSystem {
private:
    vector<MovieTicket> ticketInventory;
    string filename; // File to save/load ticket data

public:
    TicketBookingSystem(const string& file) : filename(file) {}

    void addTicket(const MovieTicket& ticket) {
        ticketInventory.push_back(ticket);
    }

    void displayTicketInventory() const {
        cout << setw(5) << "ID" << setw(20) << "Movie Name" << setw(10) << "Price" << setw(10) << "Available Seats" << endl;
        cout << setfill('-') << setw(45) << "" << setfill(' ') << endl;

        for (const auto& ticket : ticketInventory) {
            ticket.displayTicket();
        }
    }

    MovieTicket* findTicketById(int ticketId) {
        auto it = find_if(ticketInventory.begin(), ticketInventory.end(), [ticketId](const MovieTicket& t) {
            return t.ticketId == ticketId;
        });

        if (it != ticketInventory.end()) {
            return &(*it);
        } else {
            return nullptr;
        }
    }

    void buyTicket(int ticketId, int quantity) {
        MovieTicket* ticket = findTicketById(ticketId);

        if (ticket != nullptr && ticket->availableSeats >= quantity) {
            ticket->availableSeats -= quantity;
            cout << "Purchased " << quantity << " tickets for " << ticket->movieName << " for a total of Rs." << (ticket->price * quantity) << endl;
        } else {
            cout << "Ticket not found or insufficient available seats." << endl;
        }
    }

    void saveTicketDataToFile() const {
        ofstream outFile(filename);

        if (outFile.is_open()) {
            for (const auto& ticket : ticketInventory) {
                outFile << ticket.movieName << ' ' << ticket.ticketId << ' ' << ticket.price << ' ' << ticket.availableSeats << '\n';
            }

            cout << "Ticket data saved to file: " << filename << endl;
        } else {
            cerr << "Unable to open file for writing." << endl;
        }
    }

    void loadTicketDataFromFile() {
        ifstream inFile(filename);

        if (inFile.is_open()) {
            ticketInventory.clear(); // Clear existing ticket inventory

            string movieName;
            int ticketId, availableSeats;
            double price;

            while (inFile >> movieName >> ticketId >> price >> availableSeats) {
                addTicket(MovieTicket(movieName, ticketId, price, availableSeats));
            }

            cout << "Ticket data loaded from file: " << filename << endl;
        } else {
            cerr << "Unable to open file for reading. Creating a new ticket inventory." << endl;
        }
    }

    void addNewTicket() {
        string movieName;
        double price;
        int availableSeats;

        cout << "Enter movie name: ";
        cin >> movieName;
        cout << "Enter ticket price: ";
        cin >> price;
        cout << "Enter available seats: ";
        cin >> availableSeats;

        int newId = ticketInventory.empty() ? 1 : (ticketInventory.back().ticketId + 1);
        addTicket(MovieTicket(movieName, newId, price, availableSeats));

        cout << "Ticket added to the inventory.\n";
    }
};

int main() {
    TicketBookingSystem ticketSystem("ticket_inventory.txt");
    ticketSystem.loadTicketDataFromFile(); // Load ticket data from file

    int choice;
    do {
        cout << "\nMovie Ticket Booking System\n";
        cout << "1. Display Ticket Inventory\n";
        cout << "2. Buy Ticket\n";
        cout << "3. Save Ticket Data to File\n";
        cout << "4. Add New Ticket\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                ticketSystem.displayTicketInventory();
                break;

            case 2:
                int ticketId, quantity;
                cout << "Enter ticket ID: ";
                cin >> ticketId;
                cout << "Enter quantity: ";
                cin >> quantity;

                ticketSystem.buyTicket(ticketId, quantity);
                break;

            case 3:
                ticketSystem.saveTicketDataToFile();
                break;

            case 4:
               
                char y;
                cout << "\nAre you the distributor?\n(type -- YES/NO): ";
                cin >> y;
                
                if (y == 'YES' || y == 'yes') {
                    string password;
                    cout << "\nEnter password: ";
                    cin >> password;

                    if (password == "game_over") {
                        ticketSystem.addNewTicket();
                        cout << "Ticket added to the inventory.\n";
                        break;
                    } else {
                        cout << "\nWRONG PASSWORD\n";
                    }
                } else {
                    cout << "\n<-----You need to be a distributor to add new movies----->\n";
                }
                break;


            case 5:
                cout << "Exiting the program.\n";
                break;

            default:
                cout << "Invalid choice. Please try again.\n";
        }
    } while (choice != 5);

    return 0;
}