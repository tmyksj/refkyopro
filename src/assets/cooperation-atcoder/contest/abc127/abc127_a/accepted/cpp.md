# AtCoder Beginner Contest 127
## A - Ferris Wheel
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a <= 5) {
        cout << 0 << endl;
    } else if (a <= 12) {
        cout << b / 2 << endl;
    } else {
        cout << b << endl;
    }
}
```
