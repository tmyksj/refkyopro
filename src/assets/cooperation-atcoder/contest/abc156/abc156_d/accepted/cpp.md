# AtCoder Beginner Contest 156
## D - Bouquet
```cpp
#include <iostream>
#include <vector>

using namespace std;

long long pow_mod(long long x, long long y, long long mod) {
    if (y == 0) {
        return 1;
    } else if (y % 2 == 0) {
        return pow_mod(x * x % mod, y / 2, mod);
    } else {
        return x * pow_mod(x, y - 1, mod) % mod;
    }
}

int main() {
    long long n, a, b;
    cin >> n >> a >> b;

    long long mod = 1000000007;
    vector<long long> inv(200001, 0);
    inv[1] = 1;
    for (int i = 2; i <= 200000; i++) {
        inv[i] = mod - (inv[mod % i] * (mod / i)) % mod;
    }

    long long res = pow_mod(2, n, mod);

    long long r1 = 1;
    for (long long i = 1; i <= a; i++) {
        r1 *= (n - i + 1);
        r1 %= mod;
        r1 *= inv[i];
        r1 %= mod;
    }
    res = (res - r1 + mod) % mod;

    long long r2 = 1;
    for (long long i = 1; i <= b; i++) {
        r2 *= (n - i + 1);
        r2 %= mod;
        r2 *= inv[i];
        r2 %= mod;
    }
    res = (res - r2 + mod) % mod;

    cout << res - 1 << endl;
}
```
