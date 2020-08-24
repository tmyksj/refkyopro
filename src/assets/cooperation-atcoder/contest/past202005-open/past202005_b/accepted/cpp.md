# 第三回 アルゴリズム実技検定
## B - ダイナミック・スコアリング
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, q;
    cin >> n >> m >> q;

    vector<vector<bool>> a(n, vector<bool>(m, false));
    vector<int> b(m, 0);
    for (int i = 0; i < q; i++) {
        int s;
        cin >> s;

        if (s == 1) {
            int ni;
            cin >> ni;

            int res = 0;
            for (int i = 0; i < m; i++) {
                if (a[ni - 1][i]) {
                    res += n - b[i];
                }
            }

            cout << res << endl;
        } else {
            int ni, mi;
            cin >> ni >> mi;

            a[ni - 1][mi - 1] = true;
            b[mi - 1]++;
        }
    }
}
```
