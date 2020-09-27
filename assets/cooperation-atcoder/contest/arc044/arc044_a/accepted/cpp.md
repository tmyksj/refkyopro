# AtCoder Regular Contest 044
## A - 素数判定
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    bool p = n > 1;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            p = false;
        }
    }

    int s = 0;
    for (int i = n; i > 0; i /= 10) {
        s += i % 10;
    }

    cout << (p || (n > 1 && n % 2 != 0 && n % 5 != 0 && s % 3 != 0) ? "Prime" : "Not Prime") << endl;
}
```
