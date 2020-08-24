# AtCoder Beginner Contest 151
## E - Max-Min Sums
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    sort(a.begin(), a.end());

    long long mod = 1000000007;

    for (int i = 0; i < n; i++) {
        if (a[i] < 0) {
            a[i] = mod + a[i];
        }
    }

    vector<long long> inv(n + 1, 0), frac(n + 1, 0), frac_inv(n + 1, 0);
    inv[1] = 1;
    frac[0] = frac[1] = 1;
    frac_inv[0] = frac_inv[1] = 1;
    for (int i = 2; i <= n; i++) {
        inv[i] = mod - (inv[mod % i] * (mod / i)) % mod;
        frac[i] = (frac[i - 1] * i) % mod;
        frac_inv[i] = (frac_inv[i - 1] * inv[i]) % mod;
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        if (i >= k - 1) {
            long long r = a[i];
            r *= ((((frac[i] * frac_inv[k - 1]) % mod) * frac_inv[i - (k - 1)]) % mod);
            r %= mod;
            res += r;
            res %= mod;
        }

        if (n - i - 1 >= k - 1) {
            long long r = mod - a[i];
            r *= ((((frac[n - i - 1] * frac_inv[(k - 1)]) % mod) * frac_inv[(n - i - 1) - (k - 1)]) % mod);
            r %= mod;
            res += r;
            res %= mod;
        }
    }

    cout << res << endl;
}
```
