# AtCoder Regular Contest 030
## B - ツリーグラフ
```cpp
#include <iostream>
#include <vector>

using namespace std;

int dfs(int n, vector<int>& h, vector<vector<int>>& g, int i, int s) {
    int d = 0;
    for (int j = 0; j < static_cast<int>(g[i].size()); j++) {
        if (g[i][j] != s) {
            d += dfs(n, h, g, g[i][j], i);
        }
    }
    return (h[i] > 0 || d > 0 ? d + 2 : 0);
}

int main() {
    int n, x;
    cin >> n >> x;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        g[a - 1].push_back(b - 1);
        g[b - 1].push_back(a - 1);
    }

    int res = 0;
    for (int i = 0; i < static_cast<int>(g[x - 1].size()); i++) {
        res += dfs(n, h, g, g[x - 1][i], x - 1);
    }

    cout << res << endl;
}
```
