#include <iostream>
#include <unordered_map>
using namespace std;
bool isIsomorphic(string s, string t) {
      

  // Create two maps to store the character mappings.
  unordered_map<char, char> charMap;
  unordered_map<char, char> revCharMap;

  // Iterate over the strings and populate the maps.
  for (int i = 0; i < s.length(); i++) {
    char sChar = s[i];
    char tChar = t[i];

    // If the character is not already mapped, add it to the maps.
    if (charMap.find(sChar) == charMap.end()) {
      charMap[sChar] = tChar;
    }

    if (revCharMap.find(tChar) == revCharMap.end()) {
      revCharMap[tChar] = sChar;
    }

    // If the mappings are not consistent, return false.
    if (charMap[sChar] != tChar || revCharMap[tChar] != sChar) {
      return false;
    }
  }

  // If all the characters are mapped consistently, return true.
  return true;
}
    

int main(){

    string s1,s2;

    cin>>s1>>s2;
    cout<<(isIsomorphic(s1,s2)?"Isomorphic":"Not Isomorphic");
    return 0;
}