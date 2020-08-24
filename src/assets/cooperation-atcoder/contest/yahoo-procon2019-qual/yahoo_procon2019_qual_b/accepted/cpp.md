# 「みんなのプロコン 2019」
## B - Path
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 4;
    vector<vector<int>> g(n, vector<int>(n, n));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        g[a - 1][b - 1] = 1;
        g[b - 1][a - 1] = 1;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                g[j][k] = min(g[j][k], g[j][i] + g[i][k]);
            }
        }
    }

    int d = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            d = max(d, g[i][j]);
        }
    }

    cout << (d == n - 1 ? "YES" : "NO") << endl;
}
```
