# AtCoder Beginner Contest 169
## F - Knapsack for All Subsets
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, s;
    cin >> n >> s;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    long long mod = 998244353;

    vector<vector<long long>> dp(n + 1, vector<long long>(s + 1, 0));
    dp[0][0] = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= s; j++) {
            dp[i + 1][j] += 2 * dp[i][j];
            dp[i + 1][j] %= mod;

            if (a[i] + j <= s) {
                dp[i + 1][a[i] + j] += dp[i][j];
                dp[i + 1][a[i] + j] %= mod;
            }
        }
    }

    cout << dp[n][s] << endl;
}
```
