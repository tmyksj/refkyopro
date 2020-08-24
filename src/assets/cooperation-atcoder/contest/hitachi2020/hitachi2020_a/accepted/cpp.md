# 日立製作所 社会システム事業部 プログラミングコンテスト2020
## A - Hitachi String
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    bool res = s.size() % 2 == 0;
    for (int i = 0; i < static_cast<int>(s.size()); i += 2) {
        if (s[i] != 'h' || s[i + 1] != 'i') {
            res = false;
        }
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
