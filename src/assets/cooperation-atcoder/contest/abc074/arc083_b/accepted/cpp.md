# AtCoder Beginner Contest 074
## D - Restoring Road Network
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<long long>> a(n, vector<long long>(n)), b(n, vector<long long>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
            b[i][j] = a[i][j];
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                b[j][k] = min(b[j][k], b[j][i] + b[i][k]);
            }
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            res += b[i][j];
            for (int k = 0; k < n; k++) {
                if (i != k && j != k && b[i][j] == b[i][k] + b[k][j]) {
                    res -= b[i][j];
                    break;
                }
            }
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (a[i][j] > b[i][j]) {
                res = -1;
            }
        }
    }

    cout << res << endl;
}
```
