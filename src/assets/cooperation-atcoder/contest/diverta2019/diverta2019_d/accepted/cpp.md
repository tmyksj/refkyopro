# diverta 2019 Programming Contest
## D - DivRem Number
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    long long res = 0;
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0 && n / i - 1 > 0 && n / (n / i - 1) == i) {
            res += n / i - 1;
        }
    }

    cout << res << endl;
}
```
