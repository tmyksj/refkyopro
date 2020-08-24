# AtCoder Beginner Contest 153
## D - Caracal vs Monster
```cpp
#include <iostream>

using namespace std;

int main() {
    long long h;
    cin >> h;

    long long res = 0;
    for (long long i = h, j = 1; i >= 1; i /= 2, j *= 2) {
        res += j;
    }

    cout << res << endl;
}
```
