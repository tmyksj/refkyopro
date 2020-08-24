# AtCoder Beginner Contest 141
## B - Tap Dance
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    bool flag = true;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if (!(((i + 1) % 2 != 0 && (s[i] == 'R' || s[i] == 'U' || s[i] == 'D'))
                || ((i + 1) % 2 == 0 && (s[i] == 'L' || s[i] == 'U' || s[i] == 'D')))) {
            flag = false;
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
