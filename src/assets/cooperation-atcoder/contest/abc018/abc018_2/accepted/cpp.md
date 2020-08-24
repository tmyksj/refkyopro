# AtCoder Beginner Contest 018
## B - 文字列の反転
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    int n;
    cin >> s >> n;

    for (int i = 0; i < n; i++) {
        int l, r;
        cin >> l >> r;
        reverse(s.begin() + l - 1, s.begin() + r);
    }

    cout << s << endl;
}
```
