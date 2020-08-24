# AtCoder Beginner Contest 175
## A - Rainy Season
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    string s;
    cin >> s;

    int res = 0;
    for (int i = 0, j = 1; i < static_cast<int>(s.size()); i++, j++) {
        if (s[i] == 'R') {
            res = max(res, j);
        } else {
            j = 0;
        }
    }

    cout << res << endl;
}
```
