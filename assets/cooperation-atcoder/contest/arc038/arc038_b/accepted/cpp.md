# AtCoder Regular Contest 038
## B - マス目と駒
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solve(int h, int w, vector<vector<int>>& t, vector<vector<int>>& dp, int i, int j) {
    if (dp[i][j] < 0) {
        if (t[i][j] == 1
                || solve(h, w, t, dp, i, j + 1) == 1
                || solve(h, w, t, dp, i + 1, j) == 1
                || solve(h, w, t, dp, i + 1, j + 1) == 1) {
            dp[i][j] = 0;
        } else {
            dp[i][j] = 1;
        }
    }
    return dp[i][j];
}

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    vector<vector<int>> t(h + 2, vector<int>(w + 2, 1));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (s[i][j] == '.') {
                t[i + 1][j + 1] = 0;
            }
        }
    }

    vector<vector<int>> dp(h + 2, vector<int>(w + 2, -1));
    cout << (solve(h, w, t, dp, 1, 1) == 0 ? "First" : "Second") << endl;
}
```
