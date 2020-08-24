# AtCoder Beginner Contest 126
## F - XOR Matching
```cpp
#include <iostream>

using namespace std;

int main() {
    int m, k;
    cin >> m >> k;

    if (m == 0 && k == 0) {
        cout << "0 0" << endl;
    } else if (m == 1 && k == 0) {
        cout << "0 0 1 1" << endl;
    } else if (m >= 2 && k < (1 << m)) {
        for (int i = 0; i < (1 << m); i++) {
            if (i != k) {
                cout << i << " ";
            }
        }
        cout << k << " ";
        for (int i = 0; i < (1 << m); i++) {
            if ((1 << m) - i - 1 != k) {
                cout << (1 << m) - i - 1 << " ";
            }
        }
        cout << k << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
