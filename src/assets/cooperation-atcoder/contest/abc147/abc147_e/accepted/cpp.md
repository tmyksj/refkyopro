# AtCoder Beginner Contest 147
## E - Balanced Path
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<int>> a(h + 1, vector<int>(w));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cin >> a[i][j];
        }
    }

    vector<vector<int>> b(h, vector<int>(w));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cin >> b[i][j];
        }
    }

    int l = 0;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            l = max(l, (h + w) * abs(a[i][j] - b[i][j]) + 1);
        }
    }

    vector<vector<vector<bool>>> dp(h, vector<vector<bool>>(w, vector<bool>(l, false)));
    dp[0][0][abs(a[0][0] - b[0][0])] = true;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            for (int k = 0; k < l; k++) {
                if (dp[i][j][k] && i + 1 < h && k + abs(a[i + 1][j] - b[i + 1][j]) < l) {
                    dp[i + 1][j][k + abs(a[i + 1][j] - b[i + 1][j])] = true;
                }
                if (dp[i][j][k] && i + 1 < h && abs(k - abs(a[i + 1][j] - b[i + 1][j])) < l) {
                    dp[i + 1][j][abs(k - abs(a[i + 1][j] - b[i + 1][j]))] = true;
                }
                if (dp[i][j][k] && j + 1 < w && k + abs(a[i][j + 1] - b[i][j + 1]) < l) {
                    dp[i][j + 1][k + abs(a[i][j + 1] - b[i][j + 1])] = true;
                }
                if (dp[i][j][k] && j + 1 < w && abs(k - abs(a[i][j + 1] - b[i][j + 1])) < l) {
                    dp[i][j + 1][abs(k - abs(a[i][j + 1] - b[i][j + 1]))] = true;
                }
            }
        }
    }

    for (int i = 0; i < l; i++) {
        if (dp[h - 1][w - 1][i]) {
            cout << i << endl;
            break;
        }
    }
}
```
