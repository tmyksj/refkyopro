# AtCoder Beginner Contest 040
## C - 柱柱柱柱柱
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n + 2, 0);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> dp(n + 2, 1LL << 61);
    dp[0] = 0;
    for (int i = 0; i < n; i++) {
        dp[i + 1] = min(dp[i + 1], dp[i] + max(a[i], a[i + 1]) - min(a[i], a[i + 1]));
        dp[i + 2] = min(dp[i + 2], dp[i] + max(a[i], a[i + 2]) - min(a[i], a[i + 2]));
    }

    cout << dp[n - 1] << endl;
}
```
