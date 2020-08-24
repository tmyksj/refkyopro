# AtCoder Beginner Contest 101
## C - Minimization
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int idx = -1;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (a == 1) {
            idx = i;
        }
    }

    int res = 1000000000;
    for (int i = 0; i < k; i++) {
        int l = idx - i;
        int r = idx - i + k - 1;

        if (l < 0 || n - 1 < r) {
            continue;
        }

        int cl = l;
        int cr = n - r - 1;

        int re = (cl + k - 2) / (k - 1) + (cr + k - 2) / (k - 1) + 1;
        if (res > re) {
            res = re;
        }
    }

    cout << res << endl;
}
```
