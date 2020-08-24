# DISCO presents ディスカバリーチャンネル コードコンテスト2020 予選
## D - Digit Sum Replace
```cpp
#include <iostream>

using namespace std;

int main() {
    int m;
    cin >> m;

    long long r = 0, s = 0;
    for (int i = 0; i < m; i++) {
        long long d, c;
        cin >> d >> c;
        r += c;
        s += d * c;
    }

    cout << r - 1 + (s - 1) / 9 << endl;
}
```
