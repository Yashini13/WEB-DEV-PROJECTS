#include <stdio.h>
//1.STRUCTURE 
struct node {
    int key,height;
    struct node *left;
    struct node *right;
};
//2.Height 
struct node *Height(struct node *N)
{
    if(N==NULL)
      return 0;
    return N->height;  
}
//3.Balance factor

//4.int max_height
int max(int a , int b)
{
    return (a > b ? a : b);
}
//5.newnode insertion
struct node *newNode ( int key)
{
    struct node *N = (struct node *)malloc(sizeof(struct node));
    N->key=key;
    N->left=NULL;
    N->right=NULL;
    N->height=1;

    return (N);
}

//LL rotation

struct node *LL(struct node * x)
{
    struct node *y=x->right;
    struct node *T2=y->left;

    //perform rotation
    y->left=x;
    x->right=T2;

    //max height;
     x->height = max(Height(x->left),    
                    Height(x->right)) + 1; 
    y->height = max(Height(y->left), 
                    Height(y->right)) + 1; 
    return x; //newnode                
}

//RR rotation
struct node *RR(struct node * y)
{
    struct node *x=y->right;
    struct node *T2=x->left;

    //perform rotation
    x->right = y; 
    y->left = T2; 

    //max height;
     x->height = max(Height(x->left),    
                    Height(x->right)) + 1; 
    y->height = max(Height(y->left), 
                    Height(y->right)) + 1; 

    return y;
}
int balance(struct node *N)
{
    if(N==NULL)
      return 0;
    return Height(N->left)-Height(N->right);
}
//Insert nodes
struct noe *insert(struct node *node,int key)
{   
    //Perform normal BST operations
    if (node == NULL) 
        return(newNode(key)); 
    if (key < node->key) 
        node->left  = insert(node->left, key); 
    else if (key > node->key) 
        node->right = insert(node->right, key); 
    else // Equal keys are not allowed in BST 
        return node; 
    //2.Update the height of this ancestor
    node->height = 1 + max(Height(node->left), 
                        Height(node->right));
     int b = balance (node);  

    //3.ll rotaion
    if(b > 1 && key < node->left->key)
       return LL( node);
    if(b < -1 && key > node->right->key)
       return RR(node)  ;
    if(b > 1 && key > node->left->key) 
      {
        node->left=LL(node);
          return RR(node);
      }
    if(b <-1 && key < node->right->key) 
      {
        node->right=RR(node);
          return LL(node);
      }  
    return (node) ;

  
}
//PreOrder
void preOrder(struct node *root) 
{ 
    if(root != NULL) 
    { 
        printf("%d ", root->key); 
        preOrder(root->left); 
        preOrder(root->right); 
    } 
} 
//int main
int main() 
{ 
  struct node *root = NULL; 
  
  /* Constructing tree given in the above figure */
  root = insert(root, 10); 
  root = insert(root, 20); 
  root = insert(root, 30); 
  root = insert(root, 40); 
  root = insert(root, 50); 
  root = insert(root, 25); 
  
  /* The constructed AVL Tree would be 
            30 
           /  \ 
         20   40 
        /  \     \ 
       10  25    50 
  */
  
  printf("Preorder traversal of the constructed AVL"
         " tree is \n"); 
  preOrder(root); 
  
  return 0; 
} 