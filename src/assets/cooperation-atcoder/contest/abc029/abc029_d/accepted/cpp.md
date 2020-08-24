# AtCoder Beginner Contest 029
## D - 1
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    long long res = 0;
    for (long long i = 1, j = 10; i <= 10; i++, j *= 10) {
        res += (n / j) * (j / 10);
        res += min(max(0LL, n % j - j / 10 + 1), j / 10);
    }

    cout << res << endl;
}
```
