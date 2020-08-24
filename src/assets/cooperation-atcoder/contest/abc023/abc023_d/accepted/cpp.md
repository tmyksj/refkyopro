# AtCoder Beginner Contest 023
## D - 射撃王
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> h(n), s(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i] >> s[i];
    }

    long long l = 0, r = 1LL << 61;
    while (l < r) {
        long long m = (l + r) / 2;

        bool f = true;
        vector<int> t_max(n, 0);
        for (int i = 0; i < n; i++) {
            if (m - h[i] < 0) {
                f = false;
            } else {
                t_max[min((m - h[i]) / s[i], static_cast<long long>(n - 1))]++;
            }
        }

        if (f) {
            f = (t_max[0] <= 1);
            for (int i = 1; i < n; i++) {
                t_max[i] += t_max[i - 1];
                f = (f && t_max[i] <= i + 1);
            }
        }

        if (f) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    cout << l << endl;
}
```
