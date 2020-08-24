# AtCoder Regular Contest 057
## A - 2兆円
```cpp
#include <iostream>

using namespace std;

int main() {
    long long a, k;
    cin >> a >> k;

    long long res = 0;
    if (k == 0) {
        res = 2000000000000LL - a;
    } else {
        while (a < 2000000000000LL) {
            a += 1 + k * a;
            res++;
        }
    }

    cout << res << endl;
}
```
