# AtCoder Beginner Contest 165
## B - 1%
```cpp
#include <iostream>

using namespace std;

int main() {
    long long x;
    cin >> x;

    int res = 1;
    for (long long i = 101; i < x; i += i / 100) {
        res++;
    }

    cout << res << endl;
}
```
