#include <iostream>
using namespace std;
class Node{
    
    public :
    int data;
    Node *link;
    Node( int n)
    {
        this->data=data;
        this->link=NULL;
    }
};
class Stack{
    Node *top;
    
    public:
    Stack() 
    { 
        top == NULL;
    }
    void push(int data)
    {
        Node *temp = new Node(data);
        if(!temp)
        {cout<<"\nstack overflow";exit(1);}
        temp->data=data;
        temp->link=top;
        top=temp;
    }
    bool isEmpty()
    {
        return top == NULL;
    }
    int peek()
    {
        if(!isEmpty())
        {
            return top->data;
        }
        else
        exit(1);
    }
    void pop()
    {
       Node* temp;
 
        // Check for stack underflow
        if (top == NULL) {
            cout << "\nStack Underflow" << endl;
            exit(1);
        }
        else {
 
            // Assign top to temp
            temp = top;
           
            // Assign second node to top
            top = top->link;
            
            // This will automatically destroy
            // the link between first node and second node
 
            // Release memory of top node
            // i.e delete the node
            free(temp);
    }
}

void display()
    {
        Node* temp;
         // Check for stack underflow
        if (top == NULL) {
            cout << "\nStack Underflow\n";
            exit(1);
        }
        else {
            temp = top;
            while (temp != NULL) {
 
                // Print node data
                cout << temp->data;
 
                // Assign temp link to temp
                temp = temp->link;
                if (temp != NULL)
                    cout << " -> ";
            }
        }
    }
};
int main()
{
    // Creating a stack
    Stack s;
 
    // Push the elements of stack
    s.push(11);
    s.push(22);
    s.push(33);
    s.push(44);
 
    // Display stack elements
    s.display();
 
    // Print top element of stack
    cout << "\nTop element is " << s.peek() << endl;
 
    // Delete top elements of stack
    s.pop();
    s.pop();
 
    // Display stack elements
    s.display();
 
    // Print top element of stack
    cout << "\nTop element is " << s.peek() << endl;
 
    return 0;
}