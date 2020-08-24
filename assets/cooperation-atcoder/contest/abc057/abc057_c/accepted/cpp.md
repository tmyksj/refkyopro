# AtCoder Beginner Contest 057
## C - Digits in Multiplication
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    int res = 100;
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            int d1 = 0;
            for (long long j = i; j > 0; j /= 10) {
                d1++;
            }

            int d2 = 0;
            for (long long j = n / i; j > 0; j /= 10) {
                d2++;
            }

            res = min(res, max(d1, d2));
        }
    }

    cout << res << endl;
}
```
