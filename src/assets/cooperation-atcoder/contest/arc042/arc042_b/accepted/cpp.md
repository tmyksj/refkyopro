# AtCoder Regular Contest 042
## B - アリの高橋くん
```cpp
#include <algorithm>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    double v, w;
    cin >> v >> w;

    int n;
    cin >> n;

    vector<double> x(n + 1), y(n + 1);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }
    x[n] = x[0];
    y[n] = y[0];

    double res = 1LL << 61;
    for (int i = 0; i < n; i++) {
        if (x[i] == x[i + 1]) {
            double dx = abs(v - x[i]);
            double dy = abs(w - max(min(y[i], y[i + 1]), min(w, max(y[i], y[i + 1]))));
            res = min(res, sqrt(dx * dx + dy * dy));
        } else if (y[i] == y[i + 1]) {
            double dx = abs(v - max(min(x[i], x[i + 1]), min(v, max(x[i], x[i + 1]))));
            double dy = abs(w - y[i]);
            res = min(res, sqrt(dx * dx + dy * dy));
        } else {
            double a = (y[i] - y[i + 1]) / (x[i] - x[i + 1]);
            double b = y[i] - a * x[i];
            double c = w + v / a;
            double p = max(min(x[i], x[i + 1]), min((c - b) / (a + 1 / a), max(x[i], x[i + 1])));
            double dx = abs(v - p);
            double dy = abs(w - a * p - b);
            res = min(res, sqrt(dx * dx + dy * dy));
        }
    }

    cout << setprecision(12) << fixed << res << endl;
}
```
