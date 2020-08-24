# AtCoder Grand Contest 037
## A - Dividing a String
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int res = 1;
    string prev = s.substr(0, 1);
    for (int i = 1, len = 1; i < static_cast<int>(s.size()); i++, len++) {
        if (prev != s.substr(i - len + 1, len)) {
            prev = s.substr(i - len + 1, len);
            len = 0;
            res++;
        }
    }

    cout << res << endl;
}
```
