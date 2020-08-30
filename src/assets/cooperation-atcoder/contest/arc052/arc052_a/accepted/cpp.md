# AtCoder Regular Contest 052
## A - 何期生？
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if ('0' <= s[i] && s[i] <= '9') {
            cout << s[i];
        }
    }
    cout << endl;
}
```
