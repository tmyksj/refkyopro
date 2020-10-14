# AtCoder Regular Contest 040
## B - 直線塗り
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n, r;
    string s;
    cin >> n >> r >> s;

    int a = 0, b = 0;
    for (int i = n - 1; i >= 0; ) {
        if (s[i] == '.') {
            a = max(a, i - r + 1);
            b++;
            i -= r;
        } else {
            i--;
        }
    }

    cout << a + b << endl;
}
```
