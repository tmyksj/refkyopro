# AtCoder Regular Contest 047
## A - タブの開きすぎ
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n, l;
    string s;
    cin >> n >> l >> s;

    int res = 0, c = 1;
    for (int i = 0; i < n; i++) {
        c += (s[i] == '+' ? 1 : -1);
        if (c > l) {
            c = 1;
            res++;
        }
    }

    cout << res << endl;
}
```
