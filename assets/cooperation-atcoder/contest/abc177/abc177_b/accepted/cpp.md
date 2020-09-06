# AtCoder Beginner Contest 177
## B - Substring
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    int res = t.size();
    for (int i = 0; i < static_cast<int>(s.size() - t.size() + 1); i++) {
        int r = 0;
        for (int j = 0; j < static_cast<int>(t.size()); j++) {
            if (s[i + j] != t[j]) {
                r++;
            }
        }

        res = min(res, r);
    }

    cout << res << endl;
}
```
