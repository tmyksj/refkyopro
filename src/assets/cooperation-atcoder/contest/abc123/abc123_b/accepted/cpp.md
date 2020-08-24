# AtCoder Beginner Contest 123
## B - Five Dishes
```cpp
#include <cmath>
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d, e;
    cin >> a >> b >> c >> d >> e;
    cout << ((a + 9) / 10 * 10
        + (b + 9) / 10 * 10
        + (c + 9) / 10 * 10
        + (d + 9) / 10 * 10
        + (e + 9) / 10 * 10
        + min(a % 10 > 0 ? a % 10 : 10,
            min(b % 10 > 0 ? b % 10 : 10,
            min(c % 10 > 0 ? c % 10 : 10,
            min(d % 10 > 0 ? d % 10 : 10,
                e % 10 > 0 ? e % 10 : 10))))
        - 10) << endl;
}
```
