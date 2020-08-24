# AtCoder Beginner Contest 143
## C - Slimes
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int res = 1;
    for (int i = 1; i < n; i++) {
        if (s[i - 1] != s[i]) {
            res++;
        }
    }

    cout << res << endl;
}
```
