# AtCoder Beginner Contest 013
## C - 節制
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n, h, a, b, c, d, e;
    cin >> n >> h >> a >> b >> c >> d >> e;

    long long res = 1LL << 61;
    for (int i = 0; i <= n; i++) {
        long long j = (n * e - h - (b + e) * i + d + e) / (d + e);
        if (i + j <= n) {
            res = min(res, a * i + c * max(j, 0LL));
        }
    }

    cout << res << endl;
}
```
