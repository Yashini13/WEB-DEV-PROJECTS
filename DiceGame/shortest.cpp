

#include <iostream>
#include <bits/stdc++.h>
using namespace std;
class Check{
    public:
    
    void data(int arr[],int n){
   
    cout << "\nGiving processes with first come first serve: \n";
    for (int i = 0; i < n; ++i)
     {   cout << "\nProcess"<<i+1<<"="<<arr[i] << endl;
    }
    sort(arr, arr + n);

    cout << "\nGiving processes with shortest priority first: \n";
    for (int i = 0; i < n; ++i)
        cout << "\nProcess"<<i+1<<"="<<arr[i] << endl;
    }
};
int main(){
    Check ch;
    int arr[100];
    int n;
    cout<<"Enter the number of processes: ";
    cin>>n;
    cout<<"\nEnter the time for each process"<<endl;
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    } 
    ch.data(arr,n);
return 0;
}