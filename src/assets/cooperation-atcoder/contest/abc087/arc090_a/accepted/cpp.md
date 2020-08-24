# AtCoder Beginner Contest 087
## C - Candies
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> a(2, vector<int>(n));
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }

    vector<vector<int>> dp(2, vector<int>(n, 0));

    dp[0][0] = a[0][0];
    for (int i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + a[0][i];
    }

    dp[1][0] = dp[0][0] + a[1][0];
    for (int i = 1; i < n; i++) {
        dp[1][i] = max(dp[0][i], dp[1][i - 1]) + a[1][i];
    }

    cout << dp[1][n - 1] << endl;
}
```
