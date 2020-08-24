# AtCoder Beginner Contest 115
## D - Christmas
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

long long solve(vector<pair<long long, long long>>& dp, long long n, long long& x) {
    if (x <= 0) {
        return 0;
    } else if (dp[n].first > 0 && x - dp[n].first >= 0) {
        x -= dp[n].first;
        return dp[n].second;
    } else if (n == 0) {
        dp[0].first = 1;
        dp[0].second = 1;

        x -= dp[0].first;
        return dp[0].second;
    }

    long long cnt = 0, rem = x;

    x--;

    cnt += solve(dp, n - 1, x);

    if (x > 0) {
        cnt++; x--;
    }

    cnt += solve(dp, n - 1, x);

    if (x > 0) {
        x--;

        dp[n].first = rem - x;
        dp[n].second = cnt;
    }

    return cnt;
}

int main() {
    long long n, x;
    cin >> n >> x;

    vector<pair<long long, long long>> dp(n + 1, make_pair(0, 0));
    cout << solve(dp, n, x) << endl;
}
```
