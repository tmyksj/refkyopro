# AtCoder Beginner Contest 093
## D - Worst Case
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        long long a, b;
        cin >> a >> b;

        if (a > b) {
            swap(a, b);
        }

        long long c = 0;
        for (long long r = b; c < r; ) {
            long long m = (c + r + 1) / 2;
            if (m * m < a * b) {
                c = m;
            } else {
                r = m - 1;
            }
        }

        if (a == b || a + 1 == b) {
            cout << 2 * a - 2 << endl;
        } else if (c * (c + 1) >= a * b) {
            cout << 2 * c - 2 << endl;
        } else {
            cout << 2 * c - 1 << endl;
        }
    }
}
```
