#include<stdio.h>
#include<stdlib.h>
struct Node{
    int data;
    struct Node *next
};
struct Hash{
    int BUCKET;
    struct Hash **table;
};

struct Hash *createHash (int buckets)
{
    struct Hash * hash = (struct Hash *)malloc(sizeof(struct Hash));
    hash->BUCKET=buckets;
    hash->table = (struct Node **)malloc(buckets* sizeof(struct Node*));
    for(int i = 0 ;i<buckets ;i++)
    {
       hash->table[i]=NULL;
    }
    return hash;
}
int HashFunction(int key , int BUCKET){
    return key % BUCKET;
}

void insertItem(struct Hash *hash,int key){
    int index = HashFunction(key,hash->BUCKET);
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data=key;
    newNode->next=NULL;
   
   if(hash->table[index]==NULL)
     hash->table[index]=newNode;
   else
   {
     newNode->next=hash->table[index];
     hash->table[index]=newNode;
   }  

}

void display(struct Hash *hash)
{   

    for (int i=0; i<hash->BUCKET;i++)
    {
      printf(" %d. ",i);
      struct Node * current = hash->table[i];
      while (current!=NULL)
      {
        printf("--->%d ",current->data);
        current=current->next;
      }
       printf("\n");
    }
}

int main()
{
    int a[]={4,34,50,7,8,12};
    struct Hash *h = createHash(10);
    int n = sizeof(a) / sizeof(a[0]);
    for(int i=0;i<n;i++)
    {
        insertItem(h,a[i]);
    }

   display(h);
   return 0;
}