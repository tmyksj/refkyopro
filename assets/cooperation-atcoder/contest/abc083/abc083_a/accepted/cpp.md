# AtCoder Beginner Contest 083
## A - Libra
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;

    if (a + b < c + d) {
        cout << "Right" << endl;
    } else if (a + b == c + d) {
        cout << "Balanced" << endl;
    } else {
        cout << "Left" << endl;
    }
}
```
