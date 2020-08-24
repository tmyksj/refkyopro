# AtCoder Beginner Contest 124
## C - Coloring Colorfully
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int cnt0 = 0, cnt1 = 0;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if ((i % 2 == 0 && s[i] == '1') || (i % 2 == 1 && s[i] == '0')) {
            cnt0++;
        } else if ((i % 2 == 0 && s[i] == '0') || (i % 2 == 1 && s[i] == '1')) {
            cnt1++;
        }
    }

    cout << (cnt0 < cnt1 ? cnt0 : cnt1) << endl;
}
```
