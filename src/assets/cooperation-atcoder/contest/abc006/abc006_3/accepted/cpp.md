# AtCoder Beginner Contest 006
## C - スフィンクスのなぞなぞ
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int a = -1, b = -1, c = -1;
    for (int i = 0; i <= n; i++) {
        int j = 4 * n - m - 2 * i, k = n - i - j;
        if (0 <= j && j <= n && 0 <= k && k <= n) {
            a = i;
            b = j;
            c = k;
            break;
        }
    }

    cout << a << " " << b << " " << c << endl;
}
```
