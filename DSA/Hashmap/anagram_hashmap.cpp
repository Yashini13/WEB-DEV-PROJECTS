#include <iostream>
#include <unordered_map>

using namespace std;
bool is_anagram(string s1, string s2)
{
    unordered_map<char,int> m;
    if(s1.length()!=s2.length())
    {
        return false;
    }
    for(auto c1:s1){
        m[c1]++;
    }
    for(auto c2: s2)
    {  if(m.find(c2)==m.end())
    {
        return false;
    }
    else
      {  m[c2]--;}
    }

    for(auto ele:m)
    {
        if(ele.second!=0)
        {
            return false;
        }
    }
    return true;
}
int main(){

    string s1,s2;

    cin>>s1>>s2;
    cout<<(is_anagram(s1,s2)?"Anagram":"Not Anagram");
    return 0;
}