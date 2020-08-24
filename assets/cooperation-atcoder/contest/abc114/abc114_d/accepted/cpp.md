# AtCoder Beginner Contest 114
## D - 756
```cpp
#include <iostream>
#include <vector>

using namespace std;

int solve(vector<vector<int>>& dp, vector<int>& divisor, int idx, int pat) {
    if (static_cast<int>(dp.size()) <= idx || static_cast<int>(dp[0].size()) <= pat) {
        return (static_cast<int>(dp[0].size()) == pat ? 1 : 0);
    } else if (dp[idx][pat] > 0) {
        return dp[idx][pat];
    }

    dp[idx][pat] = 0;
    for (int i = 0; i <= divisor[idx]; i++) {
        dp[idx][pat] += solve(dp, divisor, idx + 1, pat * (i + 1));
    }

    return dp[idx][pat];
}

int main() {
    vector<int> pr_n(0), pr_n_dp(101, 1);
    for (int i = 2; i < static_cast<int>(pr_n_dp.size()); i++) {
        if (pr_n_dp[i] == 1) {
            pr_n.push_back(i);
            for (int j = 2 * i; j < static_cast<int>(pr_n_dp.size()); j += i) {
                pr_n_dp[j] = 0;
            }
        }
    }

    int n;
    cin >> n;

    vector<int> divisor(pr_n.size(), 0);
    for (int i = 1; i <= n; i++) {
        for (int j = 0, nn = i; j < static_cast<int>(pr_n.size()); j++) {
            while (nn % pr_n[j] == 0) {
                divisor[j]++;
                nn /= pr_n[j];
            }
        }
    }

    vector<vector<int>> dp(pr_n.size(), vector<int>(75, -1));
    cout << solve(dp, divisor, 0, 1) << endl;
}
```
