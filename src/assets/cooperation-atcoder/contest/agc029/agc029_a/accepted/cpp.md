# AtCoder Grand Contest 029
## A - Irreversible operation
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    long long res = 0;
    for (int i = 0, l = 0; i < static_cast<int>(s.size()); i++) {
        if (s[i] == 'W') {
            res += i - l;
            l++;
        }
    }

    cout << res << endl;
}
```
