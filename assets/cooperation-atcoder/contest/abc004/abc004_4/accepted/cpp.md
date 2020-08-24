# AtCoder Beginner Contest 004
## D - マーブル
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int r, g, b;
    cin >> r >> g >> b;

    int p_r = 900, p_g = 1000, p_b = 1100, range = 2000;

    vector<int> c_r(range, 1 << 29);
    for (int i = 0; i + r - 1 < range; i++) {
        c_r[i] = 0;
        for (int j = 0; j < r; j++) {
            c_r[i] += max(i + j, p_r) - min(i + j, p_r);
        }
    }

    vector<int> c_g(range, 1 << 29);
    for (int i = 0; i + g - 1 < range; i++) {
        c_g[i] = 0;
        for (int j = 0; j < g; j++) {
            c_g[i] += max(i + j, p_g) - min(i + j, p_g);
        }
    }

    vector<int> c_b(range, 1 << 29);
    for (int i = 0; i + b - 1 < range; i++) {
        c_b[i] = 0;
        for (int j = 0; j < b; j++) {
            c_b[i] += max(i + j, p_b) - min(i + j, p_b);
        }
    }

    vector<int> c_b_min(c_b);
    for (int i = range - 2; i >= 0; i--) {
        c_b_min[i] = min(c_b_min[i], c_b_min[i + 1]);
    }

    int res = 1 << 29;
    for (int i = 0; i < range; i++) {
        for (int j = i + r; j < range; j++) {
            if (j + g < range) {
                res = min(res, c_r[i] + c_g[j] + c_b_min[j + g]);
            }
        }
    }

    cout << res << endl;
}
```
