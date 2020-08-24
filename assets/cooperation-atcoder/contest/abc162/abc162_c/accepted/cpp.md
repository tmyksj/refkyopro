# AtCoder Beginner Contest 162
## C - Sum of gcd of Tuples (Easy)
```cpp
#include <iostream>

using namespace std;

template <class T>
T gcm(T a, T b) {
    if (a < b) {
        T w = a;
        a = b;
        b = w;
    }

    while (b != 0) {
        T w = a % b;
        a = b;
        b = w;
    }

    return a;
}

int main() {
    int k;
    cin >> k;

    int res = 0;
    for (int a = 1; a <= k; a++) {
        for (int b = 1; b <= k; b++) {
            for (int c = 1; c <= k; c++) {
                res += gcm(a, gcm(b, c));
            }
        }
    }

    cout << res << endl;
}
```
