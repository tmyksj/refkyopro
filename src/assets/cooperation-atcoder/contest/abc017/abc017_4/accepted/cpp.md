# AtCoder Beginner Contest 017
## D - サプリメント
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> f(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> f[i];
    }

    long long mod = 1000000007;

    vector<long long> dp(n + 1, 0);
    dp[0] = 1;

    vector<int> s(m + 1, 0);
    for (int i = 1, j = 0; i <= n; i++) {
        j = max(j, s[f[i]]);
        s[f[i]] = i;

        if (j == 0) {
            dp[i] = (2 * dp[i - 1]) % mod;
        } else {
            dp[i] = (2 * dp[i - 1] - dp[j - 1] + mod) % mod;
        }
    }

    cout << (dp[n] - dp[n - 1] + mod) % mod << endl;
}
```
