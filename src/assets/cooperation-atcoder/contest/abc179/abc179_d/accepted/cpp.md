# AtCoder Beginner Contest 179
## D - Leaping Tak
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> l(k), r(k);
    for (int i = 0; i < k; i++) {
        cin >> l[i] >> r[i];
    }

    long long mod = 998244353;

    vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < k; j++) {
            dp[min(i + l[j], n)] = (dp[min(i + l[j], n)] + dp[i]) % mod;
            dp[min(i + r[j] + 1, n)] = (dp[min(i + r[j] + 1, n)] - dp[i] + mod) % mod;
        }

        dp[i + 1] = (dp[i + 1] + dp[i]) % mod;
    }

    cout << (dp[n - 1] - dp[n - 2] + mod) % mod << endl;
}
```
