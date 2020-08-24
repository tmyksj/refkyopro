# AtCoder Beginner Contest 083
## C - Multiple Gift
```cpp
#include <iostream>

using namespace std;

int main() {
    long long x, y;
    cin >> x >> y;

    int res = 0;
    for (long long i = x; i <= y; i *= 2) {
        res++;
    }

    cout << res << endl;
}
```
