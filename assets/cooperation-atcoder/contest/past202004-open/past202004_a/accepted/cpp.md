# 第二回 アルゴリズム実技検定
## A - エレベーター
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    int si = (s[0] == 'B' ? 1 - (s[1] - '0') : s[0] - '0');
    int ti = (t[0] == 'B' ? 1 - (t[1] - '0') : t[0] - '0');

    cout << (si > ti ? si - ti : ti - si) << endl;
}
```
