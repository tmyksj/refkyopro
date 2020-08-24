# AtCoder Beginner Contest 082
## D - FT Robot
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    int x, y;
    cin >> s >> x >> y;

    int n = s.size();

    vector<int> t(1, 0);
    for (int i = 0; i < n; i++) {
        if (s[i] == 'F') {
            t[t.size() - 1]++;
        } else {
            t.push_back(0);
        }
    }

    vector<vector<bool>> dp(2, vector<bool>(2 * n + 1, false));
    dp[0][t[0] + n] = true;
    dp[1][n] = true;

    for (int i = 1; i < static_cast<int>(t.size()); i++) {
        vector<bool> next(2 * n + 1, false);
        for (int j = 0; j < 2 * n + 1; j++) {
            if (dp[i % 2][j]) {
                next[j - t[i]] = true;
                next[j + t[i]] = true;
            }
        }

        dp[i % 2] = next;
    }

    cout << (dp[0][x + n] && dp[1][y + n] ? "Yes" : "No") << endl;
}
```
