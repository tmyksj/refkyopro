# AtCoder Beginner Contest 171
## F - Strivore
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class combination {
    vector<long long> inv;
    vector<long long> frac;
    vector<long long> frac_inv;
    int mod;

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
    int k;
    string s;
    cin >> k >> s;

    int s_size = s.size();

    long long mod = 1000000007;
    combination nck(k + s_size, mod);

    vector<long long> pow25(k + 1, 1), pow26(k + 1, 1);
    for (int i = 1; i <= k; i++) {
        pow25[i] = (25 * pow25[i - 1]) % mod;
        pow26[i] = (26 * pow26[i - 1]) % mod;
    }

    long long res = 0;
    for (int i = 0; i <= k; i++) {
        long long p = (pow25[i] * pow26[k - i]) % mod;
        res = (res + nck.calc(s_size + i - 1, i) * p) % mod;
    }

    cout << res << endl;
}
```
