#include <stdio.h>
#include <stdlib.h>

// CREATE A STRUCTURE BLOCK FOR BASICS
struct node
{
    int data;
    struct node *left, *right;
};
// CREATE A UTILITY FUNCTION FOR NEWNODE
struct node *newNode(int data)
{
    /* data */
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->left = NULL;
    temp->right = NULL;

    return temp;        //RETURN TEMP;
};
// CREATE A UTILITY FUNCTIO FOR INSERTION
struct node *insert(struct node *root, int data)
{
    if (root == NULL)
        return newNode(data); // IMPORTANT STEP FOR INSERTION
    if (data < root->data)
        root->left = insert(root->left, data);
    else if (data > root->data)
        root->right = insert(root->right, data);

    return root;                  //EVERYTIME RETURN ROOT 
}
// CREATE A UTILITY FUNCTION FOR SEARCH
struct node *search(struct node *root, int data)
{
    if (root == NULL || root->data == data)  // HERE FIRST ROOT == NULL THEN DATA==DATA
        return root;
    if (data < root->data)
        return search(root->left, data);
    if (data > root->data)
        return search(root->right, data);
}
//CREATE A UTILITY FUNCTION FOR TRAVERSAL 
struct node *InOrder(struct node *root)
{   
    if(root==NULL)
     return root;
    InOrder(root->left);
    printf("%d ",root->data);
    InOrder(root->right);

   return root;    //HERE ALSO RETURN ROOT
}
//CREATE MAIN
int main()
{
    int data;
    struct node *root=NULL;
    root = insert(root,62);
    insert(root,33);
    insert(root,21);
    insert(root,49);
    insert(root,90);
    insert(root,45);
    //INORDER TRAVERSAL
    printf("INORDER TRAVERSAL IS :\n");
    InOrder(root);
    //KEY TO BE FOUND
    int key;
    printf("\nKEY TO BE FOUND ? : ");
    scanf("%d",&key);
    if(search(root,key)==NULL)
      printf("\nKEY NOT FOUND:");
    else
      printf("KEY FOUND");
}