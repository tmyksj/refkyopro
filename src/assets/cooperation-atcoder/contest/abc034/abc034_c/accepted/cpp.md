# AtCoder Beginner Contest 034
## C - 経路
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
    int w, h;
    cin >> w >> h;

    nck nck(w + h - 2, 1000000007);
    cout << nck.calc(w + h - 2, w - 1) << endl;
}
```
