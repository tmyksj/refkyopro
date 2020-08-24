# AtCoder Beginner Contest 163
## E - Active Infants
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<long long, int>> a(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> a[i].first;
        a[i].second = i;
    }

    sort(a.begin(), a.end(), greater<pair<long long, int>>());

    vector<vector<long long>> dp(n + 1, vector<long long>(n + 1, 0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; i + j < n; j++) {
            dp[i][j + 1] = max(dp[i][j + 1], dp[i][j] + a[i + j].first * (a[i + j].second - j));
            dp[i + 1][j] = max(dp[i + 1][j], dp[i][j] + a[i + j].first * (n - i - a[i + j].second - 1));
        }
    }

    long long res = 0;
    for (int i = 0; i <= n; i++) {
        res = max(res, dp[i][n - i]);
    }

    cout << res << endl;
}
```
