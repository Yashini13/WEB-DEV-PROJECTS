#include <iostream>
using namespace std;
struct Node {
    int info;
    struct Node *left, *right;
    bool lthread, rthread;
};
struct Node *insert(struct Node *root, int key)
{  
    struct Node *ptr=root;
    struct Node *par;
    while(ptr!=NULL)
    {
    if(key==ptr->info)
    {
        return root;
    } 

    par=ptr;   //update the parent node ....imp step
    if(key<ptr->info)
    {
        if(ptr->lthread==false)
         ptr=ptr->left;
        else
        break; 
    }
    
    else
    {
        if(ptr->rthread==false)
        ptr=ptr->right;
        else
        break;
    }

    }

    struct Node *temp= new Node;
    temp->lthread=true;
    temp->rthread=true;
    if(par==NULL)
    {
        root=temp;
        temp->left=NULL;
        temp->right=NULL;
    }
    else if(key < temp->info)
    {
        temp->left=par->left;
        temp->right=par;
        par->lthread=false;
        par->left=temp;
    }
    else
    {
        temp->right=par->right;
        temp->left=par;
        par->rthread=false;
        par->right=temp;
    }
    return root;
}
struct Node *inOrder(struct Node *ptr)
{
    if(ptr->rthread==true)
     ptr=ptr->right;

    ptr=ptr->right ;
    while(ptr->lthread==false)
     {
        ptr=ptr->left;
     }
    return ptr; 
}
void inorder(struct Node *root)
{
    if(root==NULL)
      printf("\nENPTY LIST:\n");

    struct Node *ptr=root;
    //go to leftmost node;
    if(ptr->lthread==false)
        ptr=ptr->left;
    while(ptr!=NULL)
    {
        printf("%d ",ptr->info);
        ptr=inOrder(ptr);
    }    

}
int main()
{
    struct Node *root=NULL;
     root = insert(root, 20); 
    root = insert(root, 10); 
    root = insert(root, 30); 
    root = insert(root, 5); 
    root = insert(root, 16); 
    root = insert(root, 14); 
    root = insert(root, 17); 
    root = insert(root, 13); 
    inorder(root);
}