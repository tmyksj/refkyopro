# Tenka1 Programmer Beginner Contest 2019
## C - Stones
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int wl = 0, wr = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '.') {
            wr++;
        }
    }

    int res = wr;
    for (int i = 0; i < n; i++) {
        if (s[i] == '.') {
            wl++;
            wr--;
        }

        res = min(res, (i - wl + 1) + wr);
    }

    cout << res << endl;
}
```
