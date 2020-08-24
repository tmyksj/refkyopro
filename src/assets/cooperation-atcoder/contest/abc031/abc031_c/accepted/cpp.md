# AtCoder Beginner Contest 031
## C - 数列ゲーム
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int inf = 1000000000;
    int res = -inf;
    for (int i = 0; i < n; i++) {
        int p0 = -inf, p1_max = -inf;
        for (int j = 0; j < n; j++) {
            if (i != j) {
                int p0_k = 0, p1_k = 0;
                for (int k = min(i, j); k <= max(i, j); k++) {
                    if ((k - min(i, j)) % 2 == 0) {
                        p0_k += a[k];
                    } else {
                        p1_k += a[k];
                    }
                }

                if (p1_max < p1_k) {
                    p0 = p0_k;
                    p1_max = p1_k;
                }
            }
        }

        res = max(res, p0);
    }

    cout << res << endl;
}
```
