# AtCoder Beginner Contest 133
## C - Remainder Minimization 2019
```cpp
#include <iostream>

using namespace std;

int main() {
    int l, r;
    cin >> l >> r;

    if (r - l >= 2019) {
        cout << 0 << endl;
    } else {
        int min = 2018;
        for (long long i = l; i <= r; i++) {
            for (long long j = i + 1; j <= r; j++) {
                if (min > i * j % 2019) {
                    min = i * j % 2019;
                }
            }
        }
        cout << min << endl;
    }
}
```
