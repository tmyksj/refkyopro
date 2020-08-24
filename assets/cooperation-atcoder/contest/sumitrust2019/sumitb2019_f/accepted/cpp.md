# 三井住友信託銀行プログラミングコンテスト2019
## F - Interval Running
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long t1, t2, a1, a2, b1, b2;
    cin >> t1 >> t2 >> a1 >> a2 >> b1 >> b2;

    if (a1 > b1) {
        swap(a1, b1);
        swap(a2, b2);
    }

    if (a1 == b1 || t1 * a1 + t2 * a2 == t1 * b1 + t2 * b2) {
        cout << "infinity" << endl;
    } else if (t1 * a1 + t2 * a2 < t1 * b1 + t2 * b2) {
        cout << "0" << endl;
    } else {
        long long d1 = t1 * b1 - t1 * a1;
        long long d2 = (t1 * a1 + t2 * a2) - (t1 * b1 + t2 * b2);
        cout << 2 * (d1 / d2) - (d1 % d2 == 0 ? 1 : 0) + 1 << endl;
    }
}
```
