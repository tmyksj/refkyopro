# AtCoder Beginner Contest 041
## D - 徒競走
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> yx(n, 0);
    for (int i = 0; i < m; i++) {
        int x, y;
        cin >> x >> y;
        yx[y - 1] = (yx[y - 1] | (1 << (x - 1)));
    }

    vector<vector<long long>> dp(n + 1, vector<long long>(1 << n, 0));
    dp[0][0] = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < (1 << n); j++) {
            for (int k = 0; k < n; k++) {
                if ((j & (1 << k)) == 0 && (j & yx[k]) == yx[k]) {
                    dp[i + 1][j | (1 << k)] += dp[i][j];
                }
            }
        }
    }

    cout << dp[n][(1 << n) - 1] << endl;
}
```
