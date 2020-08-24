# 第三回 アルゴリズム実技検定
## C - 等比数列
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, r, n;
    cin >> a >> r >> n;

    long long res = a;
    if (r > 1) {
        for (int i = 0; i < n - 1 && res <= 1000000000LL; i++) {
            res *= r;
        }
    }

    if (res <= 1000000000LL) {
        cout << res << endl;
    } else {
        cout << "large" << endl;
    }
}
```
