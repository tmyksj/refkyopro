# AtCoder Regular Contest 052
## B - 円錐
```cpp
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    const double pi = 3.14159265358979323846264338327950288;

    int n, q;
    cin >> n >> q;

    vector<int> x(n), r(n), h(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> r[i] >> h[i];
    }

    for (int i = 0; i < q; i++) {
        int a, b;
        cin >> a >> b;

        double res = 0;
        for (int j = 0; j < n; j++) {
            if (a <= x[j] && x[j] + h[j] <= b) {
                res += pi * r[j] * r[j]
                        * h[j] / 3.0;
            } else if (a <= x[j] && x[j] <= b) {
                res += pi * r[j] * r[j]
                        * (h[j] / 3.0
                                - (x[j] + h[j] - b) * (x[j] + h[j] - b) * (x[j] + h[j] - b) / (3.0 * h[j] * h[j]));
            } else if (a <= x[j] + h[j] && x[j] + h[j] <= b) {
                res += pi * r[j] * r[j]
                        * (x[j] + h[j] - a) * (x[j] + h[j] - a) * (x[j] + h[j] - a) / (3.0 * h[j] * h[j]);
            } else if (a <= x[j] + h[j] && x[j] <= b) {
                res += pi * r[j] * r[j]
                        * ((x[j] + h[j] - a) * (x[j] + h[j] - a) * (x[j] + h[j] - a) / (3.0 * h[j] * h[j])
                                - (x[j] + h[j] - b) * (x[j] + h[j] - b) * (x[j] + h[j] - b) / (3.0 * h[j] * h[j]));
            }
        }

        cout << setprecision(12) << fixed << res << endl;
    }
}
```
