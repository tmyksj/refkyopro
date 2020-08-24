# AtCoder Beginner Contest 086
## C - Traveling
```cpp
#include <iostream>

using namespace std;

int abs(int a) {
    return a >= 0 ? a : -a;
}

int main() {
    int n;
    cin >> n;

    bool res = true;
    int pt = 0, px = 0, py = 0;
    for (int i = 0; i < n; i++) {
        int t, x, y;
        cin >> t >> x >> y;

        if ((t - pt) < abs(x - px) + abs(y - py)
                || (t - pt) % 2 != (abs(x - px) + abs(y - py)) % 2) {
            res = false;
        }

        pt = t; px = x; py = y;
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
