# AtCoder Beginner Contest 014
## B - 価格の合計
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, x;
    cin >> n >> x;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if ((x & (1 << i)) > 0) {
            res += a;
        }
    }

    cout << res << endl;
}
```
