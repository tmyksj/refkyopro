# AtCoder Beginner Contest 022
## C - Blue Bird
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> u(m), v(m), l(m);
    for (int i = 0; i < m; i++) {
        cin >> u[i] >> v[i] >> l[i];
        u[i]--;
        v[i]--;
    }

    long long inf = 1LL << 61;
    vector<long long> d(n, inf);
    for (int i = 0; i < m; i++) {
        if (u[i] == 0) {
            d[v[i]] = l[i];
        } else if (v[i] == 0) {
            d[u[i]] = l[i];
        }
    }

    vector<vector<long long>> g(n, vector<long long>(n, inf));
    for (int i = 0; i < n; i++) {
        g[i][i] = 0;
    }
    for (int i = 0; i < m; i++) {
        if (u[i] != 0 && v[i] != 0) {
            g[u[i]][v[i]] = l[i];
            g[v[i]][u[i]] = l[i];
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                g[j][k] = min(g[j][k], g[j][i] + g[i][k]);
            }
        }
    }

    long long res = inf;
    for (int i = 1; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            res = min(res, d[i] + g[i][j] + d[j]);
        }
    }

    cout << (res < inf ? res : -1) << endl;
}
```
