# キーエンス プログラミング コンテスト 2019
## B - KEYENCE String
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    string t = "keyence";

    bool res = false;
    for (int i = 0; i <= static_cast<int>(t.size()); i++) {
        res = res || (s.substr(0, i) == t.substr(0, i)
                && s.substr(s.size() - t.size() + i, t.size() - i) == t.substr(i, t.size() - i));
    }

    cout << (res ? "YES" : "NO") << endl;
}
```
