# AtCoder Beginner Contest 016
## C - 友達の友達
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> g(n, vector<int>(n, 1 << 29));
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a - 1][b - 1] = 1;
        g[b - 1][a - 1] = 1;
    }
    for (int i = 0; i < n; i++) {
        g[i][i] = 0;
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                g[j][k] = min(g[j][k], g[j][i] + g[i][k]);
            }
        }
    }

    for (int i = 0; i < n; i++) {
        int r = 0;
        for (int j = 0; j < n; j++) {
            if (g[i][j] == 2) {
                r++;
            }
        }
        cout << r << endl;
    }
}
```
