# AtCoder Beginner Contest 011
## C - 123引き算
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    int inf = 1 << 29;
    vector<int> dp(n + 1, inf);
    dp[n] = 0;

    for (int i = 0; i < 3; i++) {
        int ng;
        cin >> ng;

        if (ng <= n) {
            dp[ng] = -1;
        }
    }

    for (int i = n; i > 0; i--) {
        if (0 <= dp[i] && dp[i] < inf) {
            dp[max(i - 1, 0)] = min(dp[max(i - 1, 0)], dp[i] + 1);
            dp[max(i - 2, 0)] = min(dp[max(i - 2, 0)], dp[i] + 1);
            dp[max(i - 3, 0)] = min(dp[max(i - 3, 0)], dp[i] + 1);
        }
    }

    cout << (0 <= dp[0] && dp[0] <= 100 ? "YES" : "NO") << endl;
}
```
