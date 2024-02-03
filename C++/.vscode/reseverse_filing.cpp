#include <iostream>
#include <vector>
#include <stack>
#include <string>
using namespace std;
class Solution{
    public:
    int elvaluate(std::vector<std::string>&tokens){
        stack<int> st;
        for(const std::string& token : tokens){
            if(isOperator(token)){
                int b = st.top();
                st.pop();
                int a = st.top();
                st.pop();
                int result = perform (token,a,b);
                st.push(result);
            }
                else{
                      st.push(stoi(token));
                }
        }
    }

    private:
    bool isOperator(const std::string& token){
        return token == "+" || token == "-" || token == "*" || token == "/" ;
    }
    int perform(string &op , int a ,int b){
        if(op=="+") return a+b;
        if(op=="-") return a-b;
        if(op=="*") return a*b;
        if(op=="/") return a/b;
        return 0;
    }

};