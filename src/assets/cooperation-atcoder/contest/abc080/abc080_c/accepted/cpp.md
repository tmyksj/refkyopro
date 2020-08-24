# AtCoder Beginner Contest 080
## C - Shopping Street
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int t = 10;

    int n;
    cin >> n;

    vector<vector<int>> f(n, vector<int>(t));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < t; j++) {
            cin >> f[i][j];
        }
    }

    vector<vector<long long>> p(n, vector<long long>(t + 1));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= t; j++) {
            cin >> p[i][j];
        }
    }

    long long res = -(1LL << 48);
    for (int i = 1; i < (1 << t); i++) {
        long long r = 0;
        for (int j = 0; j < n; j++) {
            int c = 0;
            for (int k = 0; k < t; k++) {
                if ((i & (1 << k)) > 0 && f[j][k] > 0) {
                    c++;
                }
            }

            r += p[j][c];
        }

        res = max(res, r);
    }

    cout << res << endl;
}
```
