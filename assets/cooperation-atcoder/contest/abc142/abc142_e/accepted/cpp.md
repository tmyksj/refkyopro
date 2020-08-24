# AtCoder Beginner Contest 142
## E - Get Everything
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<pair<long long, long long>> key(m, make_pair(0, 0));
    for (int i = 0; i < m; i++) {
        long long a, b;
        cin >> a >> b;

        key[i].second = a;
        for (int j = 0; j < b; j++) {
            int c;
            cin >> c;

            key[i].first = (key[i].first | (1 << (c - 1)));
        }
    }

    vector<vector<long long>> dp(1 << n, vector<long long>(m + 1, 1LL << 48));
    dp[0][0] = 0;

    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < m; j++) {
            if (dp[i][j + 1] > dp[i][j]) {
                dp[i][j + 1] = dp[i][j];
            }

            if (dp[i | key[j].first][j + 1] > dp[i][j] + key[j].second) {
                dp[i | key[j].first][j + 1] = dp[i][j] + key[j].second;
            }
        }
    }

    if (dp[(1 << n) - 1][m] < (1LL << 48)) {
        cout << dp[(1 << n) - 1][m] << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
