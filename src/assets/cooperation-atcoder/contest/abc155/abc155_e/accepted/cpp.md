# AtCoder Beginner Contest 155
## E - Payment
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string n;
    cin >> n;

    vector<vector<int>> dp(n.size() + 1, vector<int>(2));
    dp[0][0] = 0;
    dp[0][1] = 1;
    for (int i = 0; i < static_cast<int>(n.size()); i++) {
        int j = n[i] - '0';
        dp[i + 1][0] = min(dp[i][0] + j, dp[i][1] - j + 10);
        dp[i + 1][1] = min(dp[i][0] + j + 1, dp[i][1] - j + 9);
    }

    cout << dp[n.size()][0] << endl;
}
```
