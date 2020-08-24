# AtCoder Beginner Contest 130
## E - Common Subsequence
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> s(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> s[i];
    }

    vector<int> t(m + 1, 0);
    for (int i = 1; i <= m; i++) {
        cin >> t[i];
    }

    long long mod = 1000000007;

    vector<vector<long long>> dp0(n + 1, vector<long long>(m + 1, 0));
    vector<vector<long long>> dp1(n + 1, vector<long long>(m + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s[i] == t[j]) {
                dp1[i][j] = (dp0[i - 1][j - 1] + 1) % mod;
            }
            dp0[i][j] = (dp1[i][j] + dp0[i][j - 1] + dp0[i - 1][j] - dp0[i - 1][j - 1] + mod) % mod;
        }
    }

    long long res = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            res += dp1[i][j];
            res %= mod;
        }
    }

    cout << res << endl;;
}
```
