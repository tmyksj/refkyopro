# AtCoder Beginner Contest 180
## E - Traveling Salesman among Aerial Cities
```cpp
#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n), y(n), z(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i] >> z[i];
    }

    vector<vector<long long>> g(n, vector<long long>(n, 1LL << 61));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            g[i][j] = abs(x[j] - x[i]) + abs(y[j] - y[i]) + max(0, z[j] - z[i]);
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                g[j][k] = min(g[j][k], g[j][i] + g[i][k]);
            }
        }
    }

    vector<vector<long long>> dp(1 << n, vector<long long>(n, 1LL << 61));
    dp[1][0] = 0;
    for (int i = 1; i < (1 << n); i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                dp[i | (1 << j)][j] = min(dp[i | (1 << j)][j], dp[i][k] + g[k][j]);
            }
        }
    }

    cout << dp[(1 << n) - 1][0] << endl;
}
```
