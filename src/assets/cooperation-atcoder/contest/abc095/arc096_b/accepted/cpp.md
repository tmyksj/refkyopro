# AtCoder Beginner Contest 095
## D - Static Sushi
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, c;
    cin >> n >> c;

    vector<long long> x(n), v(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> v[i];
    }

    vector<long long> l0(n + 1, 0), l1(n + 1, 0);
    l0[1] = v[n - 1] - (c - x[n - 1]);
    l1[1] = v[n - 1] - 2 * (c - x[n - 1]);
    for (int i = 2; i <= n; i++) {
        l0[i] = l0[i - 1] + (c - x[n - i + 1]) + v[n - i] - (c - x[n - i]);
        l1[i] = l1[i - 1] + 2 * (c - x[n - i + 1]) + v[n - i] - 2 * (c - x[n - i]);
    }

    vector<long long> l0_max(n + 1, 0), l1_max(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        l0_max[i] = max(l0_max[i - 1], l0[i]);
        l1_max[i] = max(l1_max[i - 1], l1[i]);
    }

    vector<long long> r0(n + 1, 0), r1(n + 1, 0);
    r0[1] = v[0] - x[0];
    r1[1] = v[0] - 2 * x[0];
    for (int i = 2; i <= n; i++) {
        r0[i] = r0[i - 1] + x[i - 2] + v[i - 1] - x[i - 1];
        r1[i] = r1[i - 1] + 2 * x[i - 2] + v[i - 1] - 2 * x[i - 1];
    }

    vector<long long> r0_max(n + 1, 0), r1_max(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        r0_max[i] = max(r0_max[i - 1], r0[i]);
        r1_max[i] = max(r1_max[i - 1], r1[i]);
    }

    long long res = 0;
    for (int i = 0; i <= n; i++) {
        res = max(res, max(l0_max[i] + r1_max[n - i], l1_max[i] + r0_max[n - i]));
    }

    cout << res << endl;
}
```
