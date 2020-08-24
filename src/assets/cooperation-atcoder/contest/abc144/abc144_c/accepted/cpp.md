# AtCoder Beginner Contest 144
## C - Walk on Multiplication Table
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    long long res = (1LL << 48);
    for (long long i = 1; i <= n / i; i++) {
        if (n % i == 0) {
            res = min(res, i - 1 + n / i - 1);
        }
    }

    cout << res << endl;
}
```
