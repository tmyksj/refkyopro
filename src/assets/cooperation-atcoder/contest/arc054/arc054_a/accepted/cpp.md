# AtCoder Regular Contest 054
## A - 動く歩道
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    long long l, x, y, s, d;
    cin >> l >> x >> y >> s >> d;

    double r0 = static_cast<double>(s <= d ? d - s : l + d - s) / (x + y);
    if (y - x > 0) {
        double r1 = static_cast<double>(s <= d ? l + s - d : s - d) / (y - x);
        cout << setprecision(12) << fixed << min(r0, r1) << endl;
    } else {
        cout << setprecision(12) << fixed << r0 << endl;
    }
}
```
