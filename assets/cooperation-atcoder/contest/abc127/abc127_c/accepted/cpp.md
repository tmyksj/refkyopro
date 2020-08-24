# AtCoder Beginner Contest 127
## C - Prison
```cpp
#include <cmath>
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int left = 1, right = n;
    for (int i = 0; i < m; i++) {
        int l, r;
        cin >> l >> r;

        if (left < l) {
            left = l;
        }

        if (right > r) {
            right = r;
        }
    }

    cout << max(0, right - left + 1) << endl;
}
```
