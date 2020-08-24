# AtCoder Grand Contest 034
## A - Kenken Race
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n, a, b, c, d;
    cin >> n >> a >> b >> c >> d;
    a--; b--; c--; d--;

    string s;
    cin >> s;

    bool flag = true;
    for (int i = a + 1; i < c && flag; i++) {
        if (s[i - 1] == '#' && s[i] == '#') {
            flag = false;
        }
    }

    for (int i = b + 1; i < d && flag; i++) {
        if (s[i - 1] == '#' && s[i] == '#') {
            flag = false;
        }
    }

    if (c > d) {
        bool f = false;
        for (int i = b; i <= d; i++) {
            if (s[i - 1] == '.' && s[i] == '.' && s[i + 1] == '.') {
                f = true;
                break;
            }
        }

        if (!f) {
            flag = false;
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
