#include <iostream>
using namespace std;
// class Sample{
//     int a;
//     public:
//     void getdata(int a)
//    {
//     this->a=a;
//    }
//    void showdata()
//    {
//     cout<<a;
//    }
// };
// int main()
// {
//     Sample x;
//     x.getdata(4);
//     x.showdata();
//     return 0;
// }

    int maxProfit(int prices[],int n) {
        int i,idx;
        int min=prices[0];
        for(i=0;i<n;i++)
        {
            if (min>prices[i])
            {
               min=prices[i];
                idx=i;
            }
            
        }
        if (idx+1==n)
        {return 0;
        }
        else{
        int max=0;
        for(i=idx+1;i<n;i++)
        {
            if(prices[i]>max)
            {
                max=prices[i];
            }
        }
        if(max>=min)
        { return (max-min);}
        // else
        // return -1;  
    }
    }

int main()
{ 
    int arr[]={1};
    int arrSize = sizeof(arr)/sizeof(arr[0]);
     int k=maxProfit(arr,arrSize);
   cout<<k;
    return 0;
}