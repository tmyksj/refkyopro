# AtCoder Beginner Contest 167
## C - Skill Up
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n, m, x;
    cin >> n >> m >> x;

    vector<int> c(n);
    vector<vector<int>> a(n, vector<int>(m));
    for (int i = 0; i < n; i++) {
        cin >> c[i];
        for (int j = 0; j < m; j++) {
            cin >> a[i][j];
        }
    }

    int res = -1;
    for (int i = 0; i < (1 << n); i++) {
        int ir = 0;
        vector<int> ia(m, 0);
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                ir += c[j];
                for (int k = 0; k < m; k++) {
                    ia[k] += a[j][k];
                }
            }
        }

        if (*min_element(ia.begin(), ia.end()) >= x) {
            res = (res == -1 ? ir : min(res, ir));
        }
    }

    cout << res << endl;
}
```
