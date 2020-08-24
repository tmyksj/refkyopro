# AtCoder Beginner Contest 002
## D - 派閥
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<bool>> xy(n, vector<bool>(n, false));
    for (int i = 0; i < m; i++) {
        int x, y;
        cin >> x >> y;
        xy[x - 1][y - 1] = true;
        xy[y - 1][x - 1] = true;
    }

    int res = 0;
    for (int i = 0; i < (1 << n); i++) {
        bool flag = true;
        for (int j = 0; j < n; j++) {
            for (int k = j + 1; k < n; k++) {
                if ((i & (1 << j)) > 0 && (i & (1 << k)) > 0 && !xy[j][k]) {
                    flag = false;
                }
            }
        }

        if (flag) {
            int r = 0;
            for (int j = 0; j < n; j++) {
                if ((i & (1 << j)) > 0) {
                    r++;
                }
            }

            res = max(res, r);
        }
    }

    cout << res << endl;
}
```
