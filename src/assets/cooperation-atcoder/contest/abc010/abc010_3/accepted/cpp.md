# AtCoder Beginner Contest 010
## C - 浮気調査
```cpp
#include <iostream>

using namespace std;

int main() {
    long long txa, tya, txb, tyb, t, v, n;
    cin >> txa >> tya >> txb >> tyb >> t >> v >> n;

    bool res = false;
    for (int i = 0; i < n; i++) {
        long long x, y;
        cin >> x >> y;

        long long d1 = (txa - x) * (txa - x) + (tya - y) * (tya - y);
        long long d2 = (txb - x) * (txb - x) + (tyb - y) * (tyb - y);
        res = res || (t * t * v * v - d1 - d2) * (t * t * v * v - d1 - d2) - 4 * d1 * d2 >= 0;
    }

    cout << (res ? "YES" : "NO") << endl;
}
```
