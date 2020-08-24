# AtCoder Beginner Contest 060
## D - Simple Knapsack
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, w;
    cin >> n >> w;

    vector<long long> wi(n), vi(n);
    for (int i = 0; i < n; i++) {
        cin >> wi[i] >> vi[i];
    }

    vector<vector<vector<long long>>> dp(n + 1,
            vector<vector<long long>>(n + 1, vector<long long>(4 * n + 4, 0)));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k <= 4 * n; k++) {
                dp[i + 1][j][k] = max(dp[i + 1][j][k], dp[i][j][k]);
                dp[i + 1][j + 1][k + wi[i] - wi[0]] =
                        max(dp[i + 1][j + 1][k + wi[i] - wi[0]], dp[i][j][k] + vi[i]);
            }
        }
    }

    long long res = 0;
    for (int i = 0; i <= n; i++) {
        for (int j = 0; j <= n; j++) {
            for (int k = 0; k <= 4 * n; k++) {
                if (j * wi[0] + k <= w) {
                    res = max(res, dp[i][j][k]);
                }
            }
        }
    }

    cout << res << endl;
}
```
