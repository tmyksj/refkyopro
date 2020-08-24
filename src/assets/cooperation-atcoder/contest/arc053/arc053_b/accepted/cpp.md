# AtCoder Regular Contest 053
## B - 回文分割
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    map<int, int> c;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        c[s[i]]++;
    }

    int a = 0, b = 0;
    for (map<int, int>::iterator i = c.begin(); i != c.end(); i++) {
        a += i->second / 2;
        b += i->second % 2;
    }

    cout << (b == 0 ? 2 * a : 2 * (a / b) + 1) << endl;
}
```
