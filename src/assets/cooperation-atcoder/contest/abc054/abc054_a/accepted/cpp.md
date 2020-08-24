# AtCoder Beginner Contest 054
## A - One Card Poker
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a == 1) {
        a = 14;
    }

    if (b == 1) {
        b = 14;
    }

    if (a == b) {
        cout << "Draw" << endl;
    } else if (a < b) {
        cout << "Bob" << endl;
    } else {
        cout << "Alice" << endl;
    }
}
```
