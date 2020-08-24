# AtCoder Beginner Contest 035
## B - ドローン
```cpp
#include <cstdlib>
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    string s;
    int t;
    cin >> s >> t;

    map<char, int> m;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        m[s[i]]++;
    }

    if (t == 1) {
        cout << abs(m['L'] - m['R']) + abs(m['U'] - m['D']) + m['?'] << endl;
    } else {
        int d = abs(m['L'] - m['R']) + abs(m['U'] - m['D']) - m['?'];
        if (d >= 0) {
            cout << d << endl;
        } else {
            cout << abs(d) % 2 << endl;
        }
    }
}
```
