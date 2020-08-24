# AtCoder Beginner Contest 024
## D - 動的計画法
```cpp
#include <iostream>

using namespace std;

long long pow_mod(long long a, long long b, long long mod) {
    long long r = 1;
    for (long long i = 1, j = a; i <= b; i <<= 1, j = (j * j) % mod) {
        if ((i & b) > 0) {
            r = (r * j) % mod;
        }
    }
    return r;
}

int main() {
    long long a, b, c;
    cin >> a >> b >> c;

    long long mod = 1000000007;
    cout << (((b * c - a * c + mod * mod) % mod)
                    * pow_mod((a * b - b * c + a * c + mod * mod) % mod, mod - 2, mod)) % mod
            << " "
            << (((b * c - a * b + mod * mod) % mod)
                    * pow_mod((a * c - b * c + a * b + mod * mod) % mod, mod - 2, mod)) % mod
            << endl;
}
```
