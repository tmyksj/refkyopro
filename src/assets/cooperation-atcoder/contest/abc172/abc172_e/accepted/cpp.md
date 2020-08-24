# AtCoder Beginner Contest 172
## E - NEQ
```cpp
#include <iostream>
#include <vector>

using namespace std;

class combination {
    vector<long long> inv;
    vector<long long> frac;
    vector<long long> frac_inv;
    long long mod;

public:
    combination(int n, int m) {
        inv = vector<long long>(n + 1, 0);
        frac = vector<long long>(n + 1, 0);
        frac_inv = vector<long long>(n + 1, 0);
        mod = m;

        inv[1] = 1;
        frac[0] = frac[1] = 1;
        frac_inv[0] = frac_inv[1] = 1;
        for (int i = 2; i <= n; i++) {
            inv[i] = mod - inv[mod % i] * (mod / i) % mod;
            frac[i] = frac[i - 1] * i % mod;
            frac_inv[i] = frac_inv[i - 1] * inv[i] % mod;
        }
    }

    int calc(int n, int k) {
        return frac[n] * frac_inv[k] % mod * frac_inv[n - k] % mod;
    }
};

class permutation {
    vector<long long> inv;
    vector<long long> frac;
    vector<long long> frac_inv;
    long long mod;

public:
    permutation(int n, int m) {
        inv = vector<long long>(n + 1, 0);
        frac = vector<long long>(n + 1, 0);
        frac_inv = vector<long long>(n + 1, 0);
        mod = m;

        inv[1] = 1;
        frac[0] = frac[1] = 1;
        frac_inv[0] = frac_inv[1] = 1;
        for (int i = 2; i <= n; i++) {
            inv[i] = mod - inv[mod % i] * (mod / i) % mod;
            frac[i] = frac[i - 1] * i % mod;
            frac_inv[i] = frac_inv[i - 1] * inv[i] % mod;
        }
    }

    int calc(int n, int k) {
        return frac[n] * frac_inv[n - k] % mod;
    }
};

int main() {
    int n, m;
    cin >> n >> m;

    long long mod = 1000000007;
    combination nck(n, mod);
    permutation npk(m, mod);

    long long res = 0;
    for (int i = 0; i <= n; i++) {
        long long a = nck.calc(n, i);
        long long b = npk.calc(m, i);
        long long c = npk.calc(m - i, n - i);

        if (i % 2 == 0) {
            res = (res + a * b % mod * c % mod * c % mod) % mod;
        } else {
            res = (res - a * b % mod * c % mod * c % mod + mod) % mod;
        }
    }

    cout << res << endl;
}
```
