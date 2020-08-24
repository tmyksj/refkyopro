# AtCoder Beginner Contest 005
## D - おいしいたこ焼きの焼き方
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> d(n + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            cin >> d[i][j];
        }
    }
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            d[i][j] += d[i][j - 1];
        }
    }
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            d[i][j] += d[i - 1][j];
        }
    }

    vector<int> r(n * n + 1, 0);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            for (int k = i; k <= n; k++) {
                for (int l = j; l <= n; l++) {
                    r[(k - i + 1) * (l - j + 1)] = max(r[(k - i + 1) * (l - j + 1)],
                            d[k][l] - d[k][j - 1] - d[i - 1][l] + d[i - 1][j - 1]);
                }
            }
        }
    }
    for (int i = 1; i <= n * n; i++) {
        r[i] = max(r[i], r[i - 1]);
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        int p;
        cin >> p;
        cout << r[p] << endl;
    }
}
```
