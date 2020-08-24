# AtCoder Beginner Contest 156
## B - Digits
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    int res = 1;
    for (long long i = k; n > i - 1; i *= k) {
        res++;
    }

    cout << res << endl;
}
```
