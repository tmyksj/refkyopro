# AtCoder Beginner Contest 020
## B - 足し算
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    for (int i = 10; ; i *= 10) {
        if (b < i) {
            cout << 2 * (i * a + b) << endl;
            break;
        }
    }
}
```
