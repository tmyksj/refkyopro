# AtCoder Beginner Contest 077
## C - Snuke Festival
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> abc(3, vector<int>(n));
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < n; j++) {
            cin >> abc[i][j];
        }

        sort(abc[i].begin(), abc[i].end());
    }

    vector<vector<long long>> dp(3, vector<long long>(n, 0));
    for (int i = 0; i < n; i++) {
        dp[0][i] = i + 1;
    }

    for (int i = 1; i < 3; i++) {
        for (int j = 0; j < n; j++) {
            vector<int>::iterator p = lower_bound(abc[i - 1].begin(), abc[i - 1].end(), abc[i][j]);
            if (p != abc[i - 1].begin()) {
                dp[i][j] = dp[i - 1][p - abc[i - 1].begin() - 1];
            }
        }

        for (int j = 1; j < n; j++) {
            dp[i][j] += dp[i][j - 1];
        }
    }

    cout << dp[2][n - 1] << endl;
}
```
