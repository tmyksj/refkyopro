# AtCoder Beginner Contest 145
## E - All-you-can-eat
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, t;
    cin >> n >> t;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    vector<vector<int>> dp0(n + 1, vector<int>(t, 0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < t; j++) {
            dp0[i + 1][j] = max(dp0[i + 1][j], dp0[i][j]);
            if (j + a[i] < t) {
                dp0[i + 1][j + a[i]] = max(dp0[i + 1][j + a[i]], dp0[i][j] + b[i]);
            }
        }
    }

    vector<vector<int>> dp1(n + 1, vector<int>(t, 0));
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < t; j++) {
            dp1[i - 1][j] = max(dp1[i - 1][j], dp1[i][j]);
            if (j + a[i - 1] < t) {
                dp1[i - 1][j + a[i - 1]] = max(dp1[i - 1][j + a[i - 1]], dp1[i][j] + b[i - 1]);
            }
        }
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < t; j++) {
            res = max(res, dp0[i][j] + dp1[i + 1][t - j - 1] + b[i]);
        }
    }

    cout << res << endl;
}
```
