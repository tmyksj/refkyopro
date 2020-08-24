# AtCoder Beginner Contest 066
## D - 11
```cpp
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
    int n;
    cin >> n;

    int l = 0, r = 0;
    vector<int> p(n, -1);
    for (int i = 0; i < n + 1; i++) {
        int a;
        cin >> a;

        if (p[a - 1] == -1) {
            p[a - 1] = i;
        } else {
            l = p[a - 1];
            r = i;
        }
    }

    long long mod = 1000000007;
    nck nck(n + 2, mod);

    for (int i = 1; i <= n + 1; i++) {
        if (n + l - r >= i - 1) {
            cout << (nck.calc(n + 1, i) - nck.calc(n + l - r, i - 1) + mod) % mod << endl;
        } else {
            cout << nck.calc(n + 1, i) << endl;
        }
    }
}
```
