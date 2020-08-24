# AtCoder Beginner Contest 158
## C - Tax Increase
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    int res = -1;
    for (int i = 0; i <= 1000000; i++) {
        if (i * 8 / 100 == a && i * 10 / 100 == b) {
            res = i;
            break;
        }
    }

    cout << res << endl;
}
```
