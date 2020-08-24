# 第一回 アルゴリズム実技検定 過去問
## G - 組分け
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int solve(int n, vector<vector<int>>& a, int i, vector<int>& g) {
    int res = 0;

    if (i == n) {
        for (int j = 0; j < n; j++) {
            for (int k = j + 1; k < n; k++) {
                if (g[j] == g[k]) {
                    res += a[j][k];
                }
            }
        }
    } else {
        res = -(1 << 29);
        for (int j = 0; j < 3; j++) {
            g[i] = j;
            res = max(res, solve(n, a, i + 1, g));
        }
    }

    return res;
}

int main() {
    int n;
    cin >> n;

    vector<vector<int>> a(n, vector<int>(n, 0));
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            cin >> a[i][j];
        }
    }

    vector<int> g(n);
    cout << solve(n, a, 0, g) << endl;
}
```
