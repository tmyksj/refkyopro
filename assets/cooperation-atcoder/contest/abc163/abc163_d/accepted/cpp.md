# AtCoder Beginner Contest 163
## D - Sum of Large Numbers
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    long long res = 0;
    for (long long i = k - 1; i <= n; i++) {
        res += n * (n + 1) / 2 - (n - i - 1) * (n - i) / 2 - i * (i + 1) / 2 + 1;
        res %= 1000000007;
    }

    cout << res << endl;
}
```
