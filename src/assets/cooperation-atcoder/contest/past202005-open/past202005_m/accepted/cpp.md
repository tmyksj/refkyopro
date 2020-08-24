# 第三回 アルゴリズム実技検定
## M - 行商計画問題
```cpp
#include <algorithm>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        g[u - 1].push_back(v - 1);
        g[v - 1].push_back(u - 1);
    }

    int s, k;
    cin >> s >> k;

    vector<int> t(k + 1, s - 1);
    for (int i = 1; i <= k; i++) {
        cin >> t[i];
        t[i]--;
    }

    long long inf = 1LL << 61;
    vector<vector<long long>> d(k + 1, vector<long long>(n, inf));
    for (int i = 0; i <= k; i++) {
        d[i][t[i]] = 0;

        priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> que;
        que.push(make_pair(0, t[i]));
        while (!que.empty()) {
            int p = que.top().second;
            que.pop();

            for (int j = 0; j < static_cast<int>(g[p].size()); j++) {
                if (d[i][g[p][j]] > d[i][p] + 1) {
                    d[i][g[p][j]] = d[i][p] + 1;
                    que.push(make_pair(d[i][g[p][j]], g[p][j]));
                }
            }
        }
    }

    vector<vector<long long>> dp(1 << (k + 1), vector<long long>(k + 1, inf));
    dp[1][0] = 0;
    for (int i = 0; i < (1 << (k + 1)); i++) {
        for (int j = 0; j <= k; j++) {
            for (int l = 0; l <= k; l++) {
                dp[i | (1 << l)][l] = min(dp[i | (1 << l)][l], dp[i][j] + d[j][t[l]]);
            }
        }
    }

    cout << *min_element(dp[(1 << (k + 1)) - 1].begin(), dp[(1 << (k + 1)) - 1].end()) << endl;
}
```
