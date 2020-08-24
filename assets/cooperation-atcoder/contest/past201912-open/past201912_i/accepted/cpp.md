# 第一回 アルゴリズム実技検定 過去問
## I - 部品調達
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> s(m, 0), c(m);
    for (int i = 0; i < m; i++) {
        string si;
        cin >> si >> c[i];

        for (int j = 0; j < n; j++) {
            s[i] = (s[i] << 1) + (si[j] == 'Y' ? 1 : 0);
        }
    }

    long long inf = 1LL << 61;
    vector<long long> dp(1 << n, inf);
    dp[0] = 0;
    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < m; j++) {
            dp[i | s[j]] = min(dp[i | s[j]], dp[i] + c[j]);
        }
    }

    cout << (dp[(1 << n) - 1] < inf ? dp[(1 << n) - 1] : -1) << endl;
}
```
