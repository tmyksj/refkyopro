# AtCoder Beginner Contest 125
## D - Flipping Signs
```cpp
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<vector<long long>> dp(n, vector<long long>(2));
    dp[0][0] = a[0];
    dp[0][1] = -a[0];
    for (int i = 1; i < n; i++) {
        dp[i][0] = max(dp[i - 1][0] + a[i], dp[i - 1][1] - a[i]);
        dp[i][1] = max(dp[i - 1][0] - a[i], dp[i - 1][1] + a[i]);
    }

    cout << dp[n - 1][0] << endl;
}
```
