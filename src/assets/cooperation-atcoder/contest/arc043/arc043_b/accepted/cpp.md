# AtCoder Regular Contest 043
## B - 難易度
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> d(n);
    for (int i = 0; i < n; i++) {
        cin >> d[i];
    }

    sort(d.begin(), d.end());

    long long mod = 1000000007;
    vector<vector<long long>> dp(4, vector<long long>(n, 0));
    for (int i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (int i = 0; i < 3; i++) {
        for (int j = 0, k = 1; j < n; j++) {
            while (k < n && 2 * d[j] > d[k]) {
                k++;
            }

            if (k == n) {
                break;
            }

            dp[i + 1][k] = (dp[i + 1][k] + dp[i][j]) % mod;
        }

        for (int j = 0; j < n - 1; j++) {
            dp[i + 1][j + 1] = (dp[i + 1][j + 1] + dp[i + 1][j]) % mod;
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        res = (res + dp[3][i]) % mod;
    }

    cout << res << endl;
}
```
