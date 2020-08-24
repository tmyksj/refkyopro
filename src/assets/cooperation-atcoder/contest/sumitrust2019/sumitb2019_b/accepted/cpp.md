# 三井住友信託銀行プログラミングコンテスト2019
## B - Tax Rate
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int r = 0;
    while (static_cast<int>(1.08 * r) < n) {
        r++;
    }

    if (static_cast<int>(1.08 * r) == n) {
        cout << r << endl;
    } else {
        cout << ":(" << endl;
    }
}
```
