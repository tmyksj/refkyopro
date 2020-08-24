# AtCoder Beginner Contest 028
## B - 文字数カウント
```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
    string s;
    cin >> s;

    map<int, int> m;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        m[s[i]]++;
    }

    string q = "ABCDEF";
    for (int i = 0; i < static_cast<int>(q.size()); i++) {
        cout << (i == 0 ? "" : " ") << m[q[i]];
    }
    cout << endl;
}
```
