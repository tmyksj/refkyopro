# AtCoder Beginner Contest 012
## D - バスと避けられない運命
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> g(n, vector<int>(n, 1 << 29));
    for (int i = 0; i < n; i++) {
        g[i][i] = 0;
    }
    for (int i = 0; i < m; i++) {
        int a, b, t;
        cin >> a >> b >> t;
        g[a - 1][b - 1] = t;
        g[b - 1][a - 1] = t;
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                g[j][k] = min(g[j][k], g[j][i] + g[i][k]);
            }
        }
    }

    int res = 1 << 29;
    for (int i = 0; i < n; i++) {
        res = min(res, *max_element(g[i].begin(), g[i].end()));
    }

    cout << res << endl;
}
```
