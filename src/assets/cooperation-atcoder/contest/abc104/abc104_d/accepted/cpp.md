# AtCoder Beginner Contest 104
## D - We Love ABC
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<vector<long long>> dp(s.size() + 1, vector<long long>(4, 0));
    dp[0][0] = 1;

    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        dp[i + 1][0] += (s[i] == '?' ? 3 : 1) * dp[i][0];
        dp[i + 1][1] += (s[i] == '?' ? 3 : 1) * dp[i][1];
        dp[i + 1][2] += (s[i] == '?' ? 3 : 1) * dp[i][2];
        dp[i + 1][3] += (s[i] == '?' ? 3 : 1) * dp[i][3];

        if (s[i] == 'A' || s[i] == '?') {
            dp[i + 1][1] += dp[i][0];
        }

        if (s[i] == 'B' || s[i] == '?') {
            dp[i + 1][2] += dp[i][1];
        }

        if (s[i] == 'C' || s[i] == '?') {
            dp[i + 1][3] += dp[i][2];
        }

        dp[i + 1][0] %= 1000000007;
        dp[i + 1][1] %= 1000000007;
        dp[i + 1][2] %= 1000000007;
        dp[i + 1][3] %= 1000000007;
    }

    cout << dp[s.size()][3] << endl;
}
```
