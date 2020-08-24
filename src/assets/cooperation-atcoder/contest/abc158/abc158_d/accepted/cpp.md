# AtCoder Beginner Contest 158
## D - String Formation
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    int q;
    cin >> s >> q;

    int l = 200000;
    int r = l + s.size() - 1;
    vector<char> sf(500000);
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        sf[l + i] = s[i];
    }

    bool rev = false;
    for (int i = 0; i < q; i++) {
        int t;
        cin >> t;

        if (t == 1) {
            rev = !rev;
        } else {
            int f;
            char c;
            cin >> f >> c;

            if ((f == 1 && !rev) || (f == 2 && rev)) {
                l--;
                sf[l] = c;
            } else {
                r++;
                sf[r] = c;
            }
        }
    }

    if (rev) {
        for (int i = r; i >= l; i--) {
            cout << sf[i];
        }
    } else {
        for (int i = l; i <= r; i++) {
            cout << sf[i];
        }
    }
    cout << endl;
}
```
