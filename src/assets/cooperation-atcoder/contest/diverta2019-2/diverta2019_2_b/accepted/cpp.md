# diverta 2019 Programming Contest 2
## B - Picking Up
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n), y(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }

    int res = n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == j) {
                continue;
            }

            int p = x[i] - x[j], q = y[i] - y[j];

            int r = n;
            for (int k = 0; k < n; k++) {
                for (int l = 0; l < n; l++) {
                    if (k != l && p == x[k] - x[l] && q == y[k] - y[l]) {
                        r--;
                    }
                }
            }

            res = min(res, r);
        }
    }

    cout << res << endl;
}
```
