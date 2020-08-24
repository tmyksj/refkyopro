# AtCoder Beginner Contest 086
## D - Checker
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> x(n), y(n);
    vector<string> c(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i] >> c[i];
    }

    vector<vector<int>> s(4 * k + 1, vector<int>(4 * k + 1, 0));
    for (int i = 0; i < n; i++) {
        int xi = x[i] % (2 * k) + k;
        int yi = (c[i] == "B" ? y[i] % (2 * k) : (y[i] + k) % (2 * k)) + k;

        for (int j = 0; j < 5; j++) {
            for (int l = 0; l < 5; l++) {
                int xl = xi + (j - 2) * k + 1, xr = xi + (j - 1) * k + 1;
                int yl = yi + (l - 2) * k + 1, yr = yi + (l - 1) * k + 1;

                if (j % 2 == l % 2 && 0 <= xl && xr <= 4 * k && 0 <= yl && yr <= 4 * k) {
                    s[xl][yl]++;
                    s[xl][yr]--;
                    s[xr][yl]--;
                    s[xr][yr]++;
                }
            }
        }
    }

    for (int i = 0; i < 4 * k; i++) {
        for (int j = 0; j < 4 * k; j++) {
            s[i][j + 1] += s[i][j];
        }
    }
    for (int i = 0; i < 4 * k; i++) {
        for (int j = 0; j < 4 * k; j++) {
            s[i + 1][j] += s[i][j];
        }
    }

    int res = 0;
    for (int i = k; i < 3 * k; i++) {
        for (int j = k; j < 3 * k; j++) {
            res = max(res, s[i][j]);
        }
    }

    cout << res << endl;
}
```
