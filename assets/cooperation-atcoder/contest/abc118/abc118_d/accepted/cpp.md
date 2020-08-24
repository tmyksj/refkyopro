# AtCoder Beginner Contest 118
## D - Match Matching
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string n2str[] = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };
    int cost[] = {0, 2, 5, 5, 4, 5, 6, 3, 7, 6 };

    int n, m;
    cin >> n >> m;

    vector<int> a(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i];
    }

    vector<string> dp(n + 10, "");
    for (int i = 0; i < m; i++) {
        dp[cost[a[i]]] = n2str[a[i]];
    }

    for (int i = 2; i < n; i++) {
        if (dp[i] == "") {
            continue;
        }

        for (int j = 0; j < m; j++) {
            string s = dp[i + cost[a[j]]];
            string t = n2str[a[j]][0] >= dp[i][0] ? n2str[a[j]] + dp[i] : dp[i] + n2str[a[j]];
            if (s.size() != t.size() ? s.size() < t.size() : s < t) {
                dp[i + cost[a[j]]] = t;
            }
        }
    }

    cout << dp[n] << endl;
}
```
