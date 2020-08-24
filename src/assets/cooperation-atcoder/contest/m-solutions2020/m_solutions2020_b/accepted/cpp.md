# M-SOLUTIONS プロコンオープン 2020
## B - Magic 2
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c, k;
    cin >> a >> b >> c >> k;

    int r = 0;
    for (; a >= b; b *= 2) {
        r++;
    }

    for (; b >= c; c *= 2) {
        r++;
    }

    cout << (r <= k ? "Yes" : "No") << endl;
}
```
