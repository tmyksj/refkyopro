# AtCoder Beginner Contest 109
## C - Skip
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int gcm(int m, int n) {
    if (m < n) {
        int w = m;
        m = n;
        n = w;
    }

    while (n != 0) {
        int w = m % n;
        m = n;
        n = w;
    }

    return m;
}

int main() {
    int n, x;
    cin >> n >> x;

    int d = 0;
    for (int i = 0; i < n; i++) {
        int xi;
        cin >> xi;

        if (i == 0) {
            d = abs(x - xi);
        } else {
            d = gcm(d, abs(x - xi));
        }
    }

    cout << d << endl;
}
```
