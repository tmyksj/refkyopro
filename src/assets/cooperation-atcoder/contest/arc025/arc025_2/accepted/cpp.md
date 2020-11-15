# AtCoder Regular Contest 025
## B - チョコレート
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<int>> c(h + 1, vector<int>(w + 1, 0));
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            cin >> c[i][j];
        }
    }

    vector<vector<int>> a(h + 1, vector<int>(w + 1, 0)), b(h + 1, vector<int>(w + 1, 0));
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if ((i + j) % 2 == 0) {
                a[i][j] = c[i][j];
            } else {
                b[i][j] = c[i][j];
            }
        }
    }

    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            a[i][j] += a[i][j - 1];
            b[i][j] += b[i][j - 1];
        }
    }

    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            a[i][j] += a[i - 1][j];
            b[i][j] += b[i - 1][j];
        }
    }

    int res = 0;
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            for (int k = i; k <= h; k++) {
                for (int l = j; l <= w; l++) {
                    if (a[k][l] - a[k][j - 1] - a[i - 1][l] + a[i - 1][j - 1]
                            == b[k][l] - b[k][j - 1] - b[i - 1][l] + b[i - 1][j - 1]) {
                        res = max(res, (k - i + 1) * (l - j + 1));
                    }
                }
            }
        }
    }

    cout << res << endl;
}
```
