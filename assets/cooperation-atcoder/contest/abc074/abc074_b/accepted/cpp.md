# AtCoder Beginner Contest 074
## B - Collecting Balls (Easy Version)
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int abs(int a) {
    return a >= 0 ? a : -a;
}

int main() {
    int n, k;
    cin >> n >> k;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;

        res += min(2 * x, 2 * abs(x - k));
    }

    cout << res << endl;
}
```
