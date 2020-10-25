# AtCoder Beginner Contest 180
## D - Takahashi Unevolved
```cpp
#include <iostream>

using namespace std;

int main() {
    long long x, y, a, b;
    cin >> x >> y >> a >> b;

    long long res = 0;
    while (x <= 1000000000 && a * x < y && (a - 1) * x < b) {
        x *= a;
        res++;
    }

    res += (y - x - 1) / b;

    cout << res << endl;
}
```
