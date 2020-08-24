# AtCoder Beginner Contest 156
## E - Roaming
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class nck {
    vector<long long> inv;
    vector<long long> frac;
    vector<long long> frac_inv;
    int mod;

public:
    nck(int n, int m) {
        inv = vector<long long>(n + 1, 0);
        frac = vector<long long>(n + 1, 0);
        frac_inv = vector<long long>(n + 1, 0);
        mod = m;

        inv[1] = 1;
        frac[0] = frac[1] = 1;
        frac_inv[0] = frac_inv[1] = 1;
        for (int i = 2; i <= n; i++) {
            inv[i] = mod - (inv[mod % i] * (mod / i)) % mod;
            frac[i] = (frac[i - 1] * i) % mod;
            frac_inv[i] = (frac_inv[i - 1] * inv[i]) % mod;
        }
    }

    int calc(int n, int k) {
        return (frac[n] * frac_inv[k] % mod) * frac_inv[n - k] % mod;
    }
};

int main() {
    int n, k;
    cin >> n >> k;

    int mod = 1000000007;
    nck nck(n, mod);

    long long res = 0;
    for (int i = 0; i <= min(k, n - 1); i++) {
        res += static_cast<long long>(nck.calc(n, i)) * nck.calc(n - 1, n - i - 1);
        res %= mod;
    }

    cout << res << endl;
}
```
