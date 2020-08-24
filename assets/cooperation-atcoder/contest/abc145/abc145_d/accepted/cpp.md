# AtCoder Beginner Contest 145
## D - Knight
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int x, y;
    cin >> x >> y;

    if ((x + y) % 3 == 0) {
        int n = (2 * x - y) / 3;
        int m = (2 * y - x) / 3;

        if (n >= 0 && m >= 0) {
            long long mod = 1000000007;

            vector<long long> inv(n + m, 0), frac(n + m + 1, 0), frac_inv(n + m + 1, 0);
            inv[1] = 1;
            frac[0] = frac[1] = 1;
            frac_inv[0] = frac_inv[1] = 1;
            for (int i = 2; i <= n + m; i++) {
                inv[i] = mod - (inv[mod % i] * (mod / i)) % mod;
                frac[i] = (frac[i - 1] * i) % mod;
                frac_inv[i] = (frac_inv[i - 1] * inv[i]) % mod;
            }

            cout << (((frac[n + m] * frac_inv[n]) % mod) * frac_inv[m]) % mod << endl;
        } else {
            cout << "0" << endl;
        }
    } else {
        cout << "0" << endl;
    }
}
```
