# AtCoder Beginner Contest 016
## B - A±B Problem
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;

    bool p = (a + b == c);
    bool m = (a - b == c);

    if (p && m) {
        cout << "?" << endl;
    } else if (p) {
        cout << "+" << endl;
    } else if (m) {
        cout << "-" << endl;
    } else {
        cout << "!" << endl;
    }
}
```
