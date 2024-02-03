#include <stdlib.h>
#include <stdio.h>

int cnt = 0;

// STRUCTURE
struct Node
{
    int sweetness;
    struct Node *next;
};
struct Node *temp, *temp1, *temp2;
struct Node *head = NULL;

// INSERT FUNCTION
void insert(int s)
{
    if (head == NULL)
    {
        struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->sweetness = s;
        newNode->next = NULL;
        head = newNode;
    }
    else
    {
        struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->sweetness = s;
        newNode->next = head;
        head = newNode;
    }
}
// SORT FUNCTON
void sort(struct Node **head)
{
    int x;
    for (temp1 = *head; temp1 != NULL; temp1 = temp1->next)
    {
        for (temp2 = temp1->next; temp2 != NULL; temp2 = temp2->next)
        {
            if (temp2->sweetness < temp1->sweetness)
            {
                x = temp1->sweetness;
                temp1->sweetness = temp2->sweetness;
                temp2->sweetness = x;
            }
        }
    }
}
// DELETE FUNCTION
void delete()
{
    if(head == NULL)
    return ;
    else{
        temp=head;
        head=head->next;
        free(temp);
    }
}
// DISPLAY FUNCTION
void display()
{

    temp=head;
    while(temp!=NULL)
    {
        printf("%d ",temp->sweetness);
        temp=temp->next;
    }
}
void operation(int k)
{   int s;
    temp = head;
    if (temp->sweetness < k)
    {
        s = temp->sweetness + (2 * temp->next->sweetness);
        cnt++;
        delete ();
        delete ();
        insert(s);
        sort(&head);
        operation(k);
    }
    else
        return;
}
int main()
{
    int num, m, k;
    printf("LEVEL OF SWEETNESS OF COOKIES: ");
    scanf("%d", &k);
    printf("\nENTER THR NO.OF COOKIES: ");
    scanf("%d", &num);
    for (int i = 0; i < num; i++)
    {
        scanf("%d", &m);
        insert(m);
    }
    printf("\n LIST OF COOKIES BEFORE UPDATATION :\n");
    display();
    printf("\n LIST OF COOKIES AFTER UPDATATION:\n");
    sort(&head);
    operation(k);
    display();
    printf("\nNO.OF ITERATIONS: %d ", cnt);
    return 0;
}