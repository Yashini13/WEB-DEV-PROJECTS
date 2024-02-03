#include <iostream>
using namespace std;
struct Node{
    int data;
    Node *left , * right;
    bool rightThread;
};
//UTILITY FUNCTION
Node* leftMost(Node* n){
    if (n == NULL)
        return NULL;
 
    while (n->left != NULL)
        n = n->left;
 
    return n;
}
void inOrder(struct Node *root)
{
    struct Node *curr= leftMost(root);
    while(curr!=NULL)
     {
    cout<<curr->data<<" ";
    if (curr->rightThread)
      curr=curr->right;
    else
      curr=leftMost(curr->right); 
    }  
}
int main()
{   int *head=NULL;
   //inOrder(head);

}