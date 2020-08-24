# AtCoder Beginner Contest 066
## B - ss
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int res = 0;
    for (int i = (s.size() - 1) / 2; i > 0; i--) {
        for (int j = 0; j < i; j++) {
            if (s[j] != s[i + j]) {
                break;
            } else if (j == i - 1) {
                res = 2 * i;
                goto out;
            }
        }
    }

out:
    cout << res << endl;
}
```
