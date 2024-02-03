#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

bool is_equal(vector<string> &v)
{
    unordered_map <char,int> m;
    for(auto str:v)
    {
        for(char c: str)
        {
            m[c]++;
        }
    }
    int size_arr = v.size();

   for(auto ele:m)
    {
        if(ele.second % size_arr!=0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int n;
    cin>>n;
    vector<string> v(n);
    for(int i =0 ;i<n ;i++)
    {
        cin>>v[i];
    }
    cout<<(is_equal(v)?"Yes":"No");

    return 0;
}