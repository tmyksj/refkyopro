# AtCoder Beginner Contest 086
## B - 1 21
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    for (int i = b; i > 0; i /= 10) {
        a *= 10;
    }

    bool flag = false;
    for (int i = 1; i * i <= a + b; i++) {
        if (i * i == a + b) {
            flag = true;
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
