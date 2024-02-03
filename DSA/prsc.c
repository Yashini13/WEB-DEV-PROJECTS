// #include <iostream>
// using namespace std;

// struct Node {
//     int data;
//     Node* next;
// };

// int cookies(int k, Node*& head) {
//     int cnt = 0;
//     while (true) {
//         int corr_sweetness = 1;
//         int min = INT16_MAX;
//         int min2 = INT16_MAX;
//         Node* curr = head;

//         while (curr != nullptr) {
//             if (corr_sweetness && curr->data < k) {
//                 corr_sweetness = 0;
//             }

//             if (curr->data < min) {
//                 min2 = min;
//                 min = curr->data; // Finding the last element
//             } else if (curr->data < min2) {
//                 min2 = curr->data; // Finding the second last element
//             }

//             curr = curr->next;
//         }

//         if (corr_sweetness) {
//             return cnt; // If sweetness is up to the mark
//         }

//         int total = 1 * min + 2 * min2; // Calculation part

//         if (total < min2) {
//             return -1; // If negative value
//         }

//         curr = head;
//         while (curr != nullptr) {
//             if (curr->data == min || curr->data == min2) {
//                 curr->data = total; // Replacing the linked list node's data
//             }
//             curr = curr->next;
//         }

//         cout << "Updated linked list:\n";
//         curr = head;
//         while (curr != nullptr) {
//             cout << curr->data << endl;
//             curr = curr->next;
//         }

//         cnt++;
//     }

//     return cnt;
// }

// void insert(Node*& head, int data) {
//     Node* newNode = new Node();
//     newNode->data = data;
//     newNode->next = head;
//     head = newNode;
// }

// int main() {
//     int k = 10; // Desired sweetness amount
//     Node* head = nullptr;
//     insert(head, 2);
//     insert(head, 6);
//     insert(head, 8);
//     insert(head, 5);
//     insert(head, 20);
//     insert(head, 12);

//     int ans = cookies(k, head);

//     cout << "\nNo. of Iterations: " << ans << endl;
//     cout << "Final linked list:\n";
//     Node* curr = head;
//     while (curr != nullptr) {
//         cout << curr->data << endl;
//         curr = curr->next;
//     }

//     return 0;
// }
#include <stdio.h>
#include <stdlib.h>
int count = 0;
struct node
{
    int sweetness;
    struct node *next;
};

struct node *head = NULL;
struct node *temp, *temp1, *temp2;

void insert(int s)
{
    if (head == NULL)
    {
        struct node *newnode = malloc(sizeof(struct node));
        head = newnode;
        newnode->sweetness = s;
        newnode->next = NULL;
    }
    else
    {
        struct node *newnode = malloc(sizeof(struct node));
        newnode->sweetness = s;
        newnode->next = head;
        head = newnode;
    }
}

void sort(struct node **h)
{
    int a;

    // struct node *temp1;
    // struct node *temp2;

    for (temp1 = *h; temp1 != NULL; temp1 = temp1->next)
    {
        for (temp2 = temp1->next; temp2 != NULL; temp2 = temp2->next)
        {
            if (temp2->sweetness < temp1->sweetness)
            {
                a = temp1->sweetness;
                temp1->sweetness = temp2->sweetness;
                temp2->sweetness = a;
            }
        }
    }
}

void del()
{
    if (head == NULL)
        return;

    temp = head;
    head = head->next;
    free(temp);
}

void display()
{
    temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->sweetness);
        temp = temp->next;
    }
}

void operation(int k)
{
    int s;
    temp = head;

    if (temp->sweetness < k)
    {
        s = temp->sweetness + (2 * temp->next->sweetness);
        count++;
        del();
        del();
        insert(s);
        sort(&head);
        operation(k);
    }
    else
    {
        return;
    }
}

int main()
{
    int n, m, k;
    printf("Enter minimum sweetness: ");
    scanf("%d", &k);
    printf("Enter no of cookies: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        printf("Enter the sweetness of cookie %d: ", i + 1);
        scanf("%d", &m);
        insert(m);
    }

    printf("List of cookie sweetness: ");
    display();
    sort(&head);
    operation(k);
    printf("\n");
    printf("List of cookie sweetness after operation : ");
    display();

    printf("\nTotal no of operations performed: %d", count);

    return 0;
}