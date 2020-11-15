# AtCoder Regular Contest 022
## A - スーパーICT高校生
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t = "ict";
    cin >> s;

    bool res = false;
    for (int i = 0, j = 0; i < static_cast<int>(s.size()) && j < static_cast<int>(t.size()); i++) {
        if (s[i] == t[j] || ('A' <= s[i] && s[i] <= 'Z' && s[i] - 'A' == t[j] - 'a')) {
            res = (++j == static_cast<int>(t.size()));
        }
    }

    cout << (res ? "YES" : "NO") << endl;
}
```
