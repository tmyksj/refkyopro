# AtCoder Beginner Contest 064
## D - Insertion
```cpp
#include <algorithm>
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int ds = 0, x = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            ds++;
        } else {
            ds--;
        }

        x = min(x, ds);
    }

    for (int i = 0; i < -x; i++) {
        cout << "(";
    }

    cout << s;

    for (int i = 0; i < ds - x; i++) {
        cout << ")";
    }

    cout << endl;
}
```
