# 第二回 アルゴリズム実技検定
## K - 括弧
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    vector<long long> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    vector<long long> d(n);
    for (int i = 0; i < n; i++) {
        cin >> d[i];
    }

    long long inf = 1LL << 61;
    vector<vector<long long>> dp(n + 1, vector<long long>(n + 1, inf));
    dp[0][0] = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            dp[i + 1][1] = min(dp[i + 1][1], dp[i][0]);
            dp[i + 1][0] = min(dp[i + 1][0], dp[i][0] + d[i]);
            for (int j = 1; j < n; j++) {
                dp[i + 1][j + 1] = min(dp[i + 1][j + 1], dp[i][j]);
                dp[i + 1][j - 1] = min(dp[i + 1][j - 1], dp[i][j] + c[i]);
                dp[i + 1][j] = min(dp[i + 1][j], dp[i][j] + d[i]);
            }
        } else {
            dp[i + 1][1] = min(dp[i + 1][1], dp[i][0] + c[i]);
            dp[i + 1][0] = min(dp[i + 1][0], dp[i][0] + d[i]);
            for (int j = 1; j < n; j++) {
                dp[i + 1][j - 1] = min(dp[i + 1][j - 1], dp[i][j]);
                dp[i + 1][j + 1] = min(dp[i + 1][j + 1], dp[i][j] + c[i]);
                dp[i + 1][j] = min(dp[i + 1][j], dp[i][j] + d[i]);
            }
        }
    }

    cout << dp[n][0] << endl;
}
```
