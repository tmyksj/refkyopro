# AtCoder Grand Contest 043
## A - Range Flip Find Route
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    vector<vector<int>> dp(h, vector<int>(w, h * w));
    dp[0][0] = (s[0][0] == '.' ? 0 : 1);
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (i + 1 < h) {
                dp[i + 1][j] = min(dp[i + 1][j], dp[i][j] + (s[i][j] == s[i + 1][j] || s[i + 1][j] == '.' ? 0 : 1));
            }
            if (j + 1 < w) {
                dp[i][j + 1] = min(dp[i][j + 1], dp[i][j] + (s[i][j] == s[i][j + 1] || s[i][j + 1] == '.' ? 0 : 1));
            }
        }
    }

    cout << dp[h - 1][w - 1] << endl;
}
```
