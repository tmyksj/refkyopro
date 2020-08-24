# パナソニックプログラミングコンテスト2020
## B - Bishop
```cpp
#include <iostream>

using namespace std;

int main() {
    long long h, w;
    cin >> h >> w;

    if (h == 1 || w == 1) {
        cout << "1" << endl;
    } else {
        cout << ((h + 1) / 2 + h / 2) * (w / 2) + ((h + 1) / 2) * (w % 2) << endl;
    }
}
```
