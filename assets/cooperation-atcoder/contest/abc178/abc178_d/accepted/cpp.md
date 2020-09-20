# AtCoder Beginner Contest 178
## D - Redistribution
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int s;
    cin >> s;

    long long mod = 1000000007;
    vector<vector<long long>> dp(s + 1, vector<long long>(s + 2, 0));
    dp[0][0] = 1;
    for (int i = 0; i < s; i++) {
        for (int j = 0; j < s; j++) {
            dp[i + 1][min(j + 3, s + 1)] = (dp[i + 1][min(j + 3, s + 1)] + dp[i][j]) % mod;
            dp[i + 1][s + 1] = (dp[i + 1][s + 1] - dp[i][j] + mod) % mod;
        }

        for (int j = 0; j < s; j++) {
            dp[i + 1][j + 1] = (dp[i + 1][j + 1] + dp[i + 1][j]) % mod;
        }
    }

    long long res = 0;
    for (int i = 0; i < s; i++) {
        res = (res + dp[i][s]) % mod;
    }

    cout << res << endl;
}
```
