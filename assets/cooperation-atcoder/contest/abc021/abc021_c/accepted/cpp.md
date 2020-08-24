# AtCoder Beginner Contest 021
## C - 正直者の高橋くん
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, a, b, m;
    cin >> n >> a >> b >> m;
    a--;
    b--;

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int x, y;
        cin >> x >> y;
        g[x - 1].push_back(y - 1);
        g[y - 1].push_back(x - 1);
    }

    vector<vector<long long>> dp(n, vector<long long>(n, 0));
    dp[0][a] = 1;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < static_cast<int>(g[j].size()); k++) {
                dp[i + 1][g[j][k]] += dp[i][j];
                dp[i + 1][g[j][k]] %= 1000000007;
            }
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        if (dp[i][b] > 0) {
            res = dp[i][b];
            break;
        }
    }

    cout << res << endl;
}
```
