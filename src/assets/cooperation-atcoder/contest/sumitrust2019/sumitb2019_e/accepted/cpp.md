# 三井住友信託銀行プログラミングコンテスト2019
## E - Colorful Hats 2
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long res = 1;

    int r = 0, g = 0, b = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        res *= (r == a ? 1 : 0) + (g == a ? 1 : 0) + (b == a ? 1 : 0);
        res %= 1000000007;

        if (r == a) {
            r++;
        } else if (g == a) {
            g++;
        } else if (b == a) {
            b++;
        }
    }

    cout << res << endl;
}
```
