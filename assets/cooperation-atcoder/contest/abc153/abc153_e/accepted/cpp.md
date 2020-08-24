# AtCoder Beginner Contest 153
## E - Crested Ibis vs Monster
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, n;
    cin >> h >> n;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    int inf = 1000000000;
    vector<int> dp(h + 1, inf);
    dp[0] = 0;
    for (int i = 0; i < h; i++) {
        if (dp[i] < inf) {
            for (int j = 0; j < n; j++) {
                dp[min(i + a[j], h)] = min(dp[min(i + a[j], h)], dp[i] + b[j]);
            }
        }
    }

    cout << dp[h] << endl;
}
```
