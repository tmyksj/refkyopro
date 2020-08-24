# 第三回 アルゴリズム実技検定
## E - スプリンクラー
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, q;
    cin >> n >> m >> q;

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        g[u - 1].push_back(v - 1);
        g[v - 1].push_back(u - 1);
    }

    vector<int> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    for (int i = 0; i < q; i++) {
        int s;
        cin >> s;

        if (s == 1) {
            int x;
            cin >> x;
            cout << c[x - 1] << endl;

            for (int j = 0; j < static_cast<int>(g[x - 1].size()); j++) {
                c[g[x - 1][j]] = c[x - 1];
            }
        } else {
            int x, y;
            cin >> x >> y;
            cout << c[x - 1] << endl;

            c[x - 1] = y;
        }
    }
}
```
