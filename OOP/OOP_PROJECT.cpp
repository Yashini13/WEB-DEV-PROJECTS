#include <iostream>
#include <iomanip>
#include <vector>
#include <algorithm>
#include <fstream>

using namespace std;

class MovieTicket
{
public:
    string movieName;
    int ticketId;
    double price;
    int availableSeats;
    
    MovieTicket(string n, int id, double p, int seats) : movieName(n), ticketId(id), price(p), availableSeats(seats) {}

    void displayTicket() const
    {
        cout << setw(5) << ticketId << setw(20) << movieName << setw(10) << price << setw(10) << availableSeats << endl;
    }
};

class TicketBookingSystem
{
private:
    vector<MovieTicket> ticketInventory;
    string filename; // File to save/load ticket data

public:
    TicketBookingSystem(const string &file) : filename(file) {}

    void addTicket(const MovieTicket &ticket)
    {
        ticketInventory.push_back(ticket);
    }

    void displayTicketInventory() const
    {
        cout << setw(5) << "ID" << setw(20) << "Movie Name" << setw(10) << "Price" << setw(10) << " Available Seats " << endl;
        cout << setfill('-') << setw(45) << "" << setfill(' ') << endl;

        for (const auto &ticket : ticketInventory)
        {
            ticket.displayTicket();
        }
    }

    MovieTicket *findTicketById(int ticketId)
    {
        auto it = find_if(ticketInventory.begin(), ticketInventory.end(), [ticketId](const MovieTicket &t)
                          { return t.ticketId == ticketId; });

        if (it != ticketInventory.end())
        {
            return &(*it);
        }
        else
        {
            return nullptr;
        }
    }

    void buyTicket(int ticketId, int quantity)
    {
        string coupon;
        MovieTicket *ticket = findTicketById(ticketId);
        cout << "\n Do you have a coupon code ??\n If yes then enter else press any key\n";
        cin >> coupon;

        if (coupon == "DIS031")
        {
            cout << "\nHURRAY YOU RECEIVED 20% OFF \n";

            if (ticket != nullptr && ticket->availableSeats >= quantity)
            {
                ticket->availableSeats -= quantity;
                cout << "Purchased " << quantity << " tickets for " << ticket->movieName << " for a total of Rs." << (ticket->price * quantity * 0.8) << endl;
            }
            else
            {
                cout << "Ticket not found or insufficient available seats." << endl;
            }
        }
        else
        {
            cout << "\nYOU WILL HAVE TO BUY ON NORMAL RATES:\n";

            if (ticket != nullptr && ticket->availableSeats >= quantity)
            {
                ticket->availableSeats -= quantity;
                cout << "Purchased " << quantity << " tickets for " << ticket->movieName << " for a total of Rs." << (ticket->price * quantity) << endl;
            }
            else
            {
                cout << "Ticket not found or insufficient available seats." << endl;
            }
        }
    }

    void saveTicketDataToFile() const
    {
        ofstream outFile(filename);

        if (outFile.is_open())
        {
            for (const auto &ticket : ticketInventory)
            {
                outFile << ticket.movieName << ' ' << ticket.ticketId << ' ' << ticket.price << ' ' << ticket.availableSeats << '\n';
            }

            cout << "Ticket data saved to file: " << filename << endl;
        }
        else
        {
            cerr << "Unable to open file for writing." << endl;
        }
    }

    void loadTicketDataFromFile()
    {
        ifstream inFile(filename);

        if (inFile.is_open())
        {
            ticketInventory.clear(); // Clear existing ticket inventory

            string movieName;
            int ticketId, availableSeats;
            double price;

            while (inFile >> movieName >> ticketId >> price >> availableSeats)
            {
                addTicket(MovieTicket(movieName, ticketId, price, availableSeats));
            }

            cout << "Ticket data loaded from file: " << filename << endl;
        }
        else
        {
            cerr << "Unable to open file for reading. Creating a new ticket inventory." << endl;
        }
    }

    void addNewTicket()
    {
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

int main()
{
    TicketBookingSystem ticketSystem("ticket_inventory.txt");
    ticketSystem.loadTicketDataFromFile(); // Load ticket data from file
    string password;
    int choice;
    do
    {
        cout << "\nMovie Ticket Booking System\n";
        cout << "1. Display Ticket Inventory\n";
        cout << "2. Buy Ticket\n";
        cout << "3. Save Ticket Data to File\n";
        cout << "4. Add New Ticket\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
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
            cout << "\n<--------Warning!.....ONLY DISTRIBUTORS CAN ADD NEW MOVIES-------->\n ";
            cout << "\n Enter password: ";
            cin >> password;
            if (password == "game_over")
            {
                ticketSystem.addNewTicket();
            }
            else
                cout << "\nWrong Password\n";
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