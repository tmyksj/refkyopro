# AtCoder Beginner Contest 090
## B - Palindromic Numbers
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    int res = 0;
    for (int i = a; i <= b; i++) {
        if (i % 10 == i / 10000 && (i / 10) % 10 == (i / 1000) % 10) {
            res++;
        }
    }

    cout << res << endl;
}
```
