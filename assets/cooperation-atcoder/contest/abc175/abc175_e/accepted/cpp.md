# AtCoder Beginner Contest 175
## E - Picking Goods
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int r, c, k;
    cin >> r >> c >> k;

    vector<vector<int>> g(r + 1, vector<int>(c + 1, 0));
    for (int i = 0; i < k; i++) {
        int ri, ci, v;
        cin >> ri >> ci >> v;
        g[ri - 1][ci - 1] = v;
    }

    vector<vector<vector<long long>>> dp(r + 1, vector<vector<long long>>(c + 1, vector<long long>(4, 0)));
    for (int i = 0; i <= r; i++) {
        for (int j = 0; j <= c; j++) {
            for (int l = 0; l <= 3; l++) {
                if (j + 1 <= c) {
                    dp[i][j + 1][l] = max(dp[i][j + 1][l], dp[i][j][l]);
                }
                if (j + 1 <= c && l + 1 <= 3) {
                    dp[i][j + 1][l + 1] = max(dp[i][j + 1][l + 1], dp[i][j][l] + g[i][j]);
                }
                if (i + 1 <= r) {
                    dp[i + 1][j][0] = max(dp[i + 1][j][0], dp[i][j][l]);
                }
                if (i + 1 <= r && l + 1 <= 3) {
                    dp[i + 1][j][0] = max(dp[i + 1][j][0], dp[i][j][l] + g[i][j]);
                }
            }
        }
    }

    cout << *max_element(dp[r][c].begin(), dp[r][c].end()) << endl;
}
```
