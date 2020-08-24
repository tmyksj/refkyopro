# 第一回 アルゴリズム実技検定 過去問
## E - SNS のログ
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<vector<bool>> f(n, vector<bool>(n, false));
    for (int i = 0; i < q; i++) {
        int s;
        cin >> s;

        vector<vector<bool>> f_next(n, vector<bool>(n));
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                f_next[j][k] = f[j][k];
            }
        }

        if (s == 1) {
            int a, b;
            cin >> a >> b;

            f_next[a - 1][b - 1] = true;
        } else if (s == 2) {
            int a;
            cin >> a;

            for (int j = 0; j < n; j++) {
                if (j != a - 1 && f[j][a - 1]) {
                    f_next[a - 1][j] = true;
                }
            }
        } else {
            int a;
            cin >> a;

            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (j != a - 1 && k != a - 1 && f[a - 1][j] && f[j][k]) {
                        f_next[a - 1][k] = true;
                    }
                }
            }
        }

        f = f_next;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << (f[i][j] ? "Y" : "N");
        }
        cout << endl;
    }
}
```
