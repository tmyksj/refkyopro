# AtCoder Beginner Contest 068
## B - Break Number
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; ; i *= 2) {
        if (2 * i > n) {
            cout << i << endl;
            break;
        }
    }
}
```
