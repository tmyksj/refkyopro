# AtCoder Beginner Contest 076
## D - AtCoder Express
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> t[i];
    }

    vector<int> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }

    int t_sum = 0;
    for (int i = 0; i < n; i++) {
        t_sum += t[i];
    }

    int v_max = 0;
    for (int i = 0; i < n; i++) {
        v_max = max(v_max, v[i]);
    }

    vector<int> t2v(2 * t_sum + 1, 1 << 30);
    t2v[0] = t2v[2 * t_sum] = 0;
    for (int i = 0, j = 0; i < n; i++, j--) {
        for (int k = 0; k <= 2 * t[i]; j++, k++) {
            t2v[j] = min(t2v[j], 2 * v[i]);
        }
    }

    vector<vector<double>> dp(2 * t_sum + 1, vector<double>(2 * v_max + 1, -1));
    dp[0][0] = 0;
    for (int i = 0; i < 2 * t_sum; i++) {
        for (int j = 0; j <= 2 * v_max; j++) {
            if (dp[i][j] == -1) {
                continue;
            }

            if (0 <= j - 1 && j - 1 <= t2v[i + 1]) {
                dp[i + 1][j - 1] = max(dp[i + 1][j - 1], dp[i][j] + 0.25 * j - 0.125);
            }

            if (j <= t2v[i + 1]) {
                dp[i + 1][j] = max(dp[i + 1][j], dp[i][j] + 0.25 * j);
            }

            if (j + 1 <= t2v[i + 1]) {
                dp[i + 1][j + 1] = max(dp[i + 1][j + 1], dp[i][j] + 0.25 * j + 0.125);
            }
        }
    }

    cout << setprecision(12) << fixed << dp[2 * t_sum][0] << endl;
}
```
