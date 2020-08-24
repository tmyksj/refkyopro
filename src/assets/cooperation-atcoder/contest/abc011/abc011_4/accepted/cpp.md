# AtCoder Beginner Contest 011
## D - 大ジャンプ
```cpp
#include <iostream>
#include <iomanip>
#include <vector>

using namespace std;

int main() {
    int n, d, x, y;
    cin >> n >> d >> x >> y;

    double res = 0;
    if (x % d == 0 && y % d == 0) {
        x /= d;
        y /= d;

        vector<vector<double>> pt(n + 1, vector<double>(n + 1, 0));
        pt[0][0] = 1;
        for (int i = 1; i <= n; i++) {
            pt[i][0] = pt[i][i] = pt[i - 1][0] / 2;
            for (int j = 1; j < i; j++) {
                pt[i][j] = pt[i - 1][j - 1] / 2 + pt[i - 1][j] / 2;
            }
        }

        for (int i = 0; i <= n; i++) {
            if (i - x >= 0 && (i - x) % 2 == 0 && n - i - y >= 0 && (n - i - y) % 2 == 0) {
                res += pt[n][i] * pt[i][(i - x) / 2] * pt[n - i][(n - i - y) / 2];
            }
        }
    }

    cout << setprecision(12) << fixed << res << endl;
}
```
