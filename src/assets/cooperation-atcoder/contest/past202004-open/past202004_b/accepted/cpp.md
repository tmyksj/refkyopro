# 第二回 アルゴリズム実技検定
## B - 多数決
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    map<char, int> m;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        m[s[i]]++;
    }

    char res = '-';
    for (map<char, int>::iterator i = m.begin(); i != m.end(); i++) {
        if (m[res] < i->second) {
            res = i->first;
        }
    }

    cout << res << endl;
}
```
