# AtCoder Beginner Contest 078
## C - HSI
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int p = 1;
    for (int i = 0; i < m; i++) {
        p *= 2;
    }

    cout << 100 * (n - m) * p + 1900 * m * p << endl;
}
```
