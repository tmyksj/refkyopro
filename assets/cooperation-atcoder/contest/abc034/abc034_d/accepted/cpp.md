# AtCoder Beginner Contest 034
## D - 食塩水
```cpp
#include <algorithm>
#include <functional>
#include <iomanip>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<long long> w(n), p(n);
    for (int i = 0; i < n; i++) {
        cin >> w[i] >> p[i];
    }

    double l = 0, r = 100;
    for (int i = 0; i < 100; i++) {
        double m = (l + r) / 2;

        vector<pair<double, int>> q(n, make_pair(0, 0));
        for (int j = 0; j < n; j++) {
            q[j].first = w[j] * (p[j] - m);
            q[j].second = j;
        }

        sort(q.begin(), q.end(), greater<pair<double, int>>());

        double w0 = 0, w1 = 0;
        for (int j = 0; j < k; j++) {
            w0 += w[q[j].second] * p[q[j].second] / 100.0;
            w1 += w[q[j].second];
        }

        if (w0 / w1 >= m / 100) {
            l = m;
        } else {
            r = m;
        }
    }

    cout << setprecision(12) << fixed << l << endl;
}
```
