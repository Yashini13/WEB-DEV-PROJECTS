// #include <iostream>
// using namespace std;
// class Solution
// {
// public:
//     int Sol(int gas[], int cost[], int n)
//     {
//         int current = 0;
//         int total = 0;
//         int start = 0;
//         for (int i = 0; i < n; i++)
//         {
//             current += (gas[i] - cost[i]);
//             total += (gas[i] - cost[i]);
//             if (current < 0)
//             {
//                 start = i + 1;
//                 current = 0;
//             }
            
//         }
//         if (total < 0)
//                 return -1;
//         return start;
//     }
// };
// int main()
// {
//     Solution s;
//     int gas[] = {1, 2, 3, 4, 5};
//     int cost[] = {3, 4, 5, 1, 2};
//     int n = sizeof(gas) / sizeof(int);
//     int l = s.Sol(gas, cost, n);
//     cout << l;
//     return 0;
// }