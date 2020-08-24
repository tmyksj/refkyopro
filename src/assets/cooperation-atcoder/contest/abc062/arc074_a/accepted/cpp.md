# AtCoder Beginner Contest 062
## C - Chocolate Bar
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long h, w;
    cin >> h >> w;

    long long res = h * w;
    for (long long i = 1; i <= h - 1; i++) {
        long long a = i * w,
                b1 = (h - i) * (w / 2),
                b2 = ((h - i) / 2) * w,
                c1 = (h - i) * (w - (w / 2)),
                c2 = ((h - i) - ((h - i) / 2)) * w;
        res = min(res, min(
                max(a, max(b1, c1)) - min(a, min(b1, c1)),
                max(a, max(b2, c2)) - min(a, min(b2, c2))));
    }

    for (long long i = 1; i <= w - 1; i++) {
        long long a = h * i,
                b1 = (h / 2) * (w - i),
                b2 = h * ((w - i) / 2),
                c1 = (h - (h / 2)) * (w - i),
                c2 = h * ((w - i) - ((w - i) / 2));
        res = min(res, min(
                max(a, max(b1, c1)) - min(a, min(b1, c1)),
                max(a, max(b2, c2)) - min(a, min(b2, c2))));
    }

    cout << res << endl;
}
```
