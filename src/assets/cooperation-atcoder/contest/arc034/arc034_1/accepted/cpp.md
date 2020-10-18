# AtCoder Regular Contest 034
## A - 首席
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<double> p(n);
    for (int i = 0; i < n; i++) {
        double a, b, c, d, e;
        cin >> a >> b >> c >> d >> e;
        p[i] = a + b + c + d + 110 * e / 900;
    }

    cout << setprecision(12) << fixed << *max_element(p.begin(), p.end()) << endl;
}
```
