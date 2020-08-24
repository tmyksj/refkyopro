# AtCoder Beginner Contest 135
## D - Digits Parade
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<vector<int>> dp(s.size() + 1, vector<int>(13, 0));
    dp[0][0] = 1;

    for (long long i = 0, d = 1; i < static_cast<int>(s.size()); i++, d = d * 10 % 13) {
        for (int j = 0; j < 13; j++) {
            for (int k = 0; k < 10; k++) {
                if (s[s.size() - i - 1] == '?' || s[s.size() - i - 1] - '0' == k) {
                    dp[i + 1][(k * d + j) % 13] = (dp[i + 1][(k * d + j) % 13] + dp[i][j]) % 1000000007;
                }
            }
        }
    }

    cout << dp[s.size()][5] << endl;
}
```
