# 三井住友信託銀行プログラミングコンテスト2019
## C - 100 to 105
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int x;
    cin >> x;

    vector<bool> exists(x + 200, false);
    exists[0] = true;

    for (int i = 0; i <= x; i++) {
        if (exists[i]) {
            exists[i + 100] = true;
            exists[i + 101] = true;
            exists[i + 102] = true;
            exists[i + 103] = true;
            exists[i + 104] = true;
            exists[i + 105] = true;
        }
    }

    cout << (exists[x] ? "1" : "0") << endl;
}
```
