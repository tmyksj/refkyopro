# AtCoder Beginner Contest 162
## E - Sum of gcd of Tuples (Hard)
```cpp
#include <iostream>
#include <vector>

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
    long long n, k;
    cin >> n >> k;

    long long mod = 1000000007;
    long long res = 0;

    vector<long long> c(k + 1);
    for (int i = k; i >= 1; i--) {
        c[i] = pow_mod(k / i, n, mod);
        for (int j = 2 * i; j <= k; j += i) {
            c[i] = (c[i] - c[j] + mod) % mod;
        }
        res = (res + i * c[i]) % mod;
    }

    cout << res << endl;
}
```
