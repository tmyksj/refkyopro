# AtCoder Beginner Contest 178
## C - Ubiquity
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long mod = 1000000007;

    long long r0 = 1, r1 = 1, r2 = 1;
    for (int i = 0; i < n; i++) {
        r0 = (10 * r0) % mod;
        r1 = (9 * r1) % mod;
        r2 = (8 * r2) % mod;
    }

    cout << (r0 - 2 * r1 + r2 + 2 * mod) % mod << endl;
}
```
