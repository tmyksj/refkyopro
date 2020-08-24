# AtCoder Beginner Contest 104
## B - AcCepted
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    bool ac = (s[0] == 'A');

    if (ac) {
        for (int i = 2, cnt_c = 0; i < static_cast<int>(s.size()) - 1; i++) {
            if (s[i] == 'C') {
                cnt_c++;
            }

            ac = (cnt_c == 1);
        }
    }

    if (ac) {
        ac = ('a' <= s[1] && s[1] <= 'z');
        for (int i = 2; i < static_cast<int>(s.size()); i++) {
            ac = (ac && (s[i] == 'C' || ('a' <= s[i] && s[i] <= 'z')));
        }
    }

    cout << (ac ? "AC" : "WA") << endl;
}
```
