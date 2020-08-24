# AtCoder Beginner Contest 054
## D - Mixing Experiment
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, ma, mb;
    cin >> n >> ma >> mb;

    vector<int> a(n), b(n), c(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i] >> c[i];
    }

    int inf = 1000000000, dp_n = 401;
    vector<vector<vector<int>>> dp(n + 1, vector<vector<int>>(dp_n, vector<int>(dp_n, inf)));
    dp[0][0][0] = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < dp_n; j++) {
            for (int k = 0; k < dp_n; k++) {
                if (dp[i][j][k] < inf) {
                    dp[i + 1][j][k] = min(dp[i + 1][j][k], dp[i][j][k]);
                    dp[i + 1][j + a[i]][k + b[i]] = min(dp[i + 1][j + a[i]][k + b[i]], dp[i][j][k] + c[i]);
                }
            }
        }
    }

    int res = inf;
    for (int i = 1; i * ma < dp_n && i * mb < dp_n; i++) {
        res = min(res, dp[n][i * ma][i * mb]);
    }

    if (res < inf) {
        cout << res << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
