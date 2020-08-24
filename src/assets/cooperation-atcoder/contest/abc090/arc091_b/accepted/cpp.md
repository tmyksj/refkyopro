# AtCoder Beginner Contest 090
## D - Remainder Reminder
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    if (k == 0) {
        cout << n * n << endl;
    } else {
        long long res = 0;
        for (int i = k + 1; i <= n; i++) {
            res += (n / i) * (i - k) + (n % i - k + 1 > 0 ? n % i - k + 1 : 0);
        }

        cout << res << endl;
    }
}
```
