# AtCoder Beginner Contest 127
## E - Cell Distance
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, m, k;
    cin >> n >> m >> k;

    long long cn = n * m - 2, ck = min(k - 2, cn - k + 2);
    long long mod = 1000000007;

    vector<long long> inv(ck + 1, 0);
    inv[1] = 1;
    for (int i = 2; i <= ck; i++) {
        inv[i] = mod - (inv[mod % i] * (mod / i)) % mod;
    }

    long long c = 1;
    for (int i = 0; i < ck; i++) {
        c *= (cn - i) % mod * inv[i + 1] % mod;
        c %= mod;
    }

    long long res = 0;
    for (int i = 1; i < n; i++) {
        res += i * (n - i) % mod * m % mod * m % mod * c % mod;
        res %= mod;
    }
    for (int i = 1; i < m; i++) {
        res += i * (m - i) % mod * n % mod * n % mod * c % mod;
        res %= mod;
    }

    cout << res << endl;
}
```
