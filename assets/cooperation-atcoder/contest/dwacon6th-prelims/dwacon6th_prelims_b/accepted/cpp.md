# 第6回 ドワンゴからの挑戦状 予選
## B - Fusing Slimes
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    long long mod = 1000000007;

    vector<long long> inv(n + 1, 0), inv_sum(n + 1, 0), frac(n + 1, 0);
    inv[1] = 1;
    inv_sum[1] = 1;
    frac[0] = frac[1] = 1;
    for (int i = 2; i <= n; i++) {
        inv[i] = mod - inv[mod % i] * (mod / i) % mod;
        inv_sum[i] = (inv_sum[i - 1] + inv[i]) % mod;
        frac[i] = frac[i - 1] * i % mod;
    }

    long long res = 0;
    for (int i = 0; i < n - 1; i++) {
        res += (x[i + 1] - x[i]) * inv_sum[i + 1] % mod * frac[n - 1];
        res %= mod;
    }

    cout << res << endl;
}
```
