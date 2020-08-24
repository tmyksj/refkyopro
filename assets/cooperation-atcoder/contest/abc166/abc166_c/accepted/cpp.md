# AtCoder Beginner Contest 166
## C - Peaks
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a - 1].push_back(b - 1);
        g[b - 1].push_back(a - 1);
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        int m = 0;
        for (int j = 0; j < static_cast<int>(g[i].size()); j++) {
            m = max(m, h[g[i][j]]);
        }

        if (h[i] > m) {
            res++;
        }
    }

    cout << res << endl;
}
```
