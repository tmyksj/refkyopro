# AtCoder Beginner Contest 132
## F - Small Products
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    vector<long long> v(0);
    for (long long i = 1; i * i <= n; i++) {
        v.push_back(i);
        if (i < n / i) {
            v.push_back(n / i);
        }
    }

    sort(v.begin(), v.end());
    int v_size = v.size();

    long long mod = 1000000007;
    vector<vector<long long>> dp(k, vector<long long>(v_size, 0));
    for (int i = 0; i < v_size; i++) {
        dp[0][i] = v[i];
    }
    for (int i = 1; i < k; i++) {
        dp[i][0] = dp[i - 1][v_size - 1];
        for (int j = 1; j < v_size; j++) {
            dp[i][j] = (v[j] - v[j - 1]) * dp[i - 1][v_size - j - 1] % mod;
        }
        for (int j = 1; j < v_size; j++) {
            dp[i][j] = (dp[i][j] + dp[i][j - 1]) % mod;
        }
    }

    cout << dp[k - 1][v_size - 1] << endl;
}
```
