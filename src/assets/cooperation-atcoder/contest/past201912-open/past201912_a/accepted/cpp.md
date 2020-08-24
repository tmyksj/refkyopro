# 第一回 アルゴリズム実技検定 過去問
## A - 2 倍チェック
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    if ('0' <= s[0] && s[0] <= '9'
            && '0' <= s[1] && s[1] <= '9'
            && '0' <= s[2] && s[2] <= '9') {
        cout << 2 * (100 * (s[0] - '0') + 10 * (s[1] - '0') + (s[2] - '0')) << endl;
    } else {
        cout << "error" << endl;
    }
}
```
