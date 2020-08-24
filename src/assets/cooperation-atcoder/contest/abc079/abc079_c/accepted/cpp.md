# AtCoder Beginner Contest 079
## C - Train Ticket
```cpp
#include <iostream>

using namespace std;

int main() {
    int abcd;
    cin >> abcd;

    int a = (abcd / 1000) % 10;
    int b = (abcd / 100) % 10;
    int c = (abcd / 10) % 10;
    int d = abcd % 10;

    for (int i = 0; i < 8; i++) {
        int r = a
                + ((i & 0b100) > 0 ? 1 : -1) * b
                + ((i & 0b010) > 0 ? 1 : -1) * c
                + ((i & 0b001) > 0 ? 1 : -1) * d;
        if (r == 7) {
            cout << a
                    << ((i & 0b100) > 0 ? "+" : "-") << b
                    << ((i & 0b010) > 0 ? "+" : "-") << c
                    << ((i & 0b001) > 0 ? "+" : "-") << d
                    << "=7" << endl;
            break;
        }
    }
}
```
