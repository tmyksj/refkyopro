# 第三回 アルゴリズム実技検定
## A - ケース・センシティブ
```cpp
#include <iostream>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    string s_lower = s;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        s_lower[i] = ('A' <= s_lower[i] && s_lower[i] <= 'Z' ? s_lower[i] - 'A' + 'a' : s_lower[i]);
    }

    string t_lower = t;
    for (int i = 0; i < static_cast<int>(t.size()); i++) {
        t_lower[i] = ('A' <= t_lower[i] && t_lower[i] <= 'Z' ? t_lower[i] - 'A' + 'a' : t_lower[i]);
    }

    cout << (s == t ? "same" : (s_lower == t_lower ? "case-insensitive" : "different")) << endl;
}
```
