# AtCoder Beginner Contest 015
## D - 高橋くんの苦悩
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int w, n, k;
    cin >> w >> n >> k;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    vector<vector<vector<int>>> dp(k + 1, vector<vector<int>>(n + 1, vector<int>(w + 1, 0)));
    for (int i = 0; i < k; i++) {
        for (int j = 0; j < n; j++) {
            for (int l = 0; l < w; l++) {
                dp[i][j + 1][l] = max(dp[i][j + 1][l], dp[i][j][l]);
                if (l + a[j] <= w) {
                    dp[i + 1][j + 1][l + a[j]] = max(dp[i + 1][j + 1][l + a[j]], dp[i][j][l] + b[j]);
                }
            }
        }
    }

    int res = 0;
    for (int i = 0; i <= k; i++) {
        for (int j = 0; j <= n; j++) {
            for (int l = 0; l <= w; l++) {
                res = max(res, dp[i][j][l]);
            }
        }
    }

    cout << res << endl;
}
```
