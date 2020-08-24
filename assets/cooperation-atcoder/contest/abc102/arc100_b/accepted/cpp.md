# AtCoder Beginner Contest 102
## D - Equal Cut
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        a[i] += a[i - 1];
    }

    long long res = 1LL << 61;
    for (int i = 1, j = 2, k = 3; j <= n - 2; j++) {
        for (; i < j - 1; i++) {
            long long p0 = a[i] - a[0], p1 = a[i + 1] - a[0];
            long long q0 = a[j] - a[i], q1 = a[j] - a[i + 1];
            if (max(p0, q0) - min(p0, q0) < max(p1, q1) - min(p1, q1)) {
                break;
            }
        }

        for (; k < n - 1; k++) {
            long long r0 = a[k] - a[j], r1 = a[k + 1] - a[j];
            long long s0 = a[n] - a[k], s1 = a[n] - a[k + 1];
            if (max(r0, s0) - min(r0, s0) < max(r1, s1) - min(r1, s1)) {
                break;
            }
        }

        long long p = a[i] - a[0];
        long long q = a[j] - a[i];
        long long r = a[k] - a[j];
        long long s = a[n] - a[k];
        res = min(res, max({p, q, r, s}) - min({p, q, r, s}));
    }

    cout << res << endl;
}
```
