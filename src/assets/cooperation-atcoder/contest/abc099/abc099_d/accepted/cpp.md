# AtCoder Beginner Contest 099
## D - Good Grid
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, c;
    cin >> n >> c;

    vector<vector<long long>> d(c, vector<long long>(c));
    for (int i = 0; i < c; i++) {
        for (int j = 0; j < c; j++) {
            cin >> d[i][j];
        }
    }

    vector<vector<int>> cr(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> cr[i][j];
        }
    }

    vector<vector<long long>> dsum(3, vector<long long>(c, 0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < c; k++) {
                dsum[(i + j + 2) % 3][k] += d[cr[i][j] - 1][k];
            }
        }
    }

    long long res = (1LL << 48);
    for (int i = 0; i < c; i++) {
        for (int j = 0; j < c; j++) {
            for (int k = 0; k < c; k++) {
                if (i == j || j == k || k == i) {
                    continue;
                }

                if (res > dsum[0][i] + dsum[1][j] + dsum[2][k]) {
                    res = dsum[0][i] + dsum[1][j] + dsum[2][k];
                }
            }
        }
    }

    cout << res << endl;
}
```
