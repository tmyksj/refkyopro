# AtCoder Beginner Contest 180
## B - Various distances
```cpp
#include <algorithm>
#include <cmath>
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    vector<long long> y(n), z(n);
    for (int i = 0; i < n; i++) {
        y[i] = abs(x[i]);
        z[i] = y[i] * y[i];
    }

    cout << setprecision(12) << fixed << accumulate(y.begin(), y.end(), 0LL) << endl;
    cout << setprecision(12) << fixed << sqrt(static_cast<double>(accumulate(z.begin(), z.end(), 0LL))) << endl;
    cout << setprecision(12) << fixed << *max_element(y.begin(), y.end()) << endl;
}
```
