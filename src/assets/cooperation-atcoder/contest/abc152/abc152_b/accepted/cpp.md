# AtCoder Beginner Contest 152
## B - Comparing Strings
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a < b) {
        for (int i = 0; i < b; i++) {
            cout << a;
        }
    } else {
        for (int i = 0; i < a; i++) {
            cout << b;
        }
    }
    cout << endl;
}
```
