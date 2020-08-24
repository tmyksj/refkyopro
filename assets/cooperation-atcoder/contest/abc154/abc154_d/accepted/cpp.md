# AtCoder Beginner Contest 154
## D - Dice in Line
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
    }

    vector<double> q(n);
    for (int i = 0; i < n; i++) {
        q[i] = static_cast<double>(p[i] * (p[i] + 1)) / (2 * p[i]);
    }

    for (int i = 1; i < n; i++) {
        q[i] += q[i - 1];
    }

    double res = static_cast<double>(q[k - 1]);
    for (int i = k; i < n; i++) {
        res = max(res, static_cast<double>(q[i] - q[i - k]));
    }

    cout << setprecision(12) << fixed << res << endl;
}
```
