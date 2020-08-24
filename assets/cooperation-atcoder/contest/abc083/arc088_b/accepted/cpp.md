# AtCoder Beginner Contest 083
## D - Wide Flip
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int n = static_cast<int>(s.size());

    int res = n;
    for (int i = 1; i < n; i++) {
        if (s[i - 1] != s[i]) {
            res = min(res, max(i, n - i));
        }
    }

    cout << res << endl;
}
```
