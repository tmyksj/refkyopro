# 第三回 アルゴリズム実技検定
## H - ハードル走
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, l;
    cin >> n >> l;

    vector<int> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    int t1, t2, t3;
    cin >> t1 >> t2 >> t3;

    vector<int> y(l, 0);
    for (int i = 0; i < n; i++) {
        y[x[i]] = t3;
    }

    long long res = 1LL << 61;

    vector<long long> dp(l, 1LL << 61);
    dp[0] = 0;
    for (int i = 0; i < l; i++) {
        if (i + 1 < l) {
            dp[i + 1] = min(dp[i + 1], dp[i] + t1 + y[i]);
        } else {
            res = min(res, dp[i] + t1 + y[i]);
        }

        if (i + 2 < l) {
            dp[i + 2] = min(dp[i + 2], dp[i] + t1 + t2 + y[i]);
        } else if (i + 2 == l) {
            res = min(res, dp[i] + t1 + t2 + y[i]);
        } else {
            res = min(res, dp[i] + t1 / 2 + t2 / 2 + y[i]);
        }

        if (i + 4 < l) {
            dp[i + 4] = min(dp[i + 4], dp[i] + t1 + 3 * t2 + y[i]);
        } else if (i + 4 == l) {
            res = min(res, dp[i] + t1 + 3 * t2 + y[i]);
        } else if (i + 4 == l + 1) {
            res = min(res, dp[i] + t1 / 2 + 5 * t2 / 2 + y[i]);
        } else if (i + 4 == l + 2) {
            res = min(res, dp[i] + t1 / 2 + 3 * t2 / 2 + y[i]);
        } else {
            res = min(res, dp[i] + t1 / 2 + t2 / 2 + y[i]);
        }
    }

    cout << res << endl;
}
```
