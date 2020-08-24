# AtCoder Beginner Contest 052
## D - Walk and Teleport
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, a, b;
    cin >> n >> a >> b;

    long long x_prev;
    cin >> x_prev;

    long long res = 0;
    for (int i = 1; i < n; i++) {
        long long x;
        cin >> x;

        if (a * (x - x_prev) < b) {
            res += a * (x - x_prev);
        } else {
            res += b;
        }

        x_prev = x;
    }

    cout << res << endl;
}
```
