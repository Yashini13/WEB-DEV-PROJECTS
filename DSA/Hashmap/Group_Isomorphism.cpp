#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;
vector <vector<string>> groupAnagrams(vector<string> &strs){

    unordered_map<string , vector<string>> anagrams;
    for(string str: strs){
        string key=str;
        sort(key.begin(),key.end());
        anagrams[key].push_back(str);
    }
    vector<vector<string>> result;
    for(auto &pair:anagrams)
    {
        result.push_back(pair.second);
    }
    return result;
}
int main()
{
    cout<<"Input String: [";
    vector <string>input={"cat","tac","atc","can","nac","omm"};
    vector<vector<string>> result = groupAnagrams(input);
    for(const string &str:input)
    {
        cout<< str <<" ";
    }
   cout<<"]\n";

   cout<<"Grouped Anagram:\n";
   for(const auto &group: result){
    cout<<"[";
    for(const string &str: group)
    {
        cout<<str<<" ";
    }
    cout<<"]\n";
   }
   return 0;
}