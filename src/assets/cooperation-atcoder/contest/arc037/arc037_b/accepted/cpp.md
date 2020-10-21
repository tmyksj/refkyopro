# AtCoder Regular Contest 037
## B - バウムテスト
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int dfs(int n, vector<vector<int>>& g, vector<bool>& s, int o, int i) {
    if (s[i]) {
        s[i] = false;

        int r = 1;
        for (int j = 0; j < static_cast<int>(g[i].size()); j++) {
            if (g[i][j] != o) {
                r &= dfs(n, g, s, i, g[i][j]);
            }
        }
        return r;
    } else {
        return 0;
    }
}

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

    int res = 0;

    vector<bool> s(n, true);
    for (int i = 0; i < n; i++) {
        res += dfs(n, g, s, -1, i);
    }

    cout << res << endl;
}
```
