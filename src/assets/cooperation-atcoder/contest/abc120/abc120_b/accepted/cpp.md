# AtCoder Beginner Contest 120
## B - K-th Common Divisor
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, k;
    cin >> a >> b >> k;

    for (int i = (a < b ? a : b); i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            k--;

            if (k == 0) {
                cout << i << endl;
                break;
            }
        }
    }
}
```
