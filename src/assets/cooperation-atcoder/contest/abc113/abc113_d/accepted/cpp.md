# AtCoder Beginner Contest 113
## D - Number of Amidakuji
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, w, k;
    cin >> h >> w >> k;

    vector<vector<int>> dp(h + 1, vector<int>(w, 0));
    dp[0][0] = 1;

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < (1 << (w - 1)); j++) {
            bool invalid = false;
            for (int k = 0; k < w - 2; k++) {
                if ((j & (1 << k)) > 0 && (j & (1 << (k + 1))) > 0) {
                    invalid = true;
                }
            }

            if (invalid) {
                continue;
            }

            for (int k = 0; k < w; k++) {
                if (k > 0 && (j & (1 << (k - 1))) > 0) {
                    dp[i + 1][k - 1] = (dp[i + 1][k - 1] + dp[i][k]) % 1000000007;
                } else if ((j & (1 << k)) > 0) {
                    dp[i + 1][k + 1] = (dp[i + 1][k + 1] + dp[i][k]) % 1000000007;
                } else {
                    dp[i + 1][k] = (dp[i + 1][k] + dp[i][k]) % 1000000007;
                }
            }
        }
    }

    cout << dp[h][k - 1] << endl;
}
```
