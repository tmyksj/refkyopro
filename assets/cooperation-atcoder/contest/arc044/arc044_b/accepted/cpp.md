# AtCoder Regular Contest 044
## B - 最短路問題
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
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> b(n, 0);
    for (int i = 0; i < n; i++) {
        b[a[i]]++;
    }

    long long mod = 1000000007;

    long long res = 1;
    if (a[0] != 0 || b[0] != 1) {
        res = 0;
    }

    for (int i = 0; i < n - 1; i++) {
        if (b[i] == 0 && b[i + 1] > 0) {
            res = 0;
        }
    }

    for (int i = 1; b[i] > 0; i++) {
        res *= pow_mod((pow_mod(2, b[i - 1], mod) - 1 + mod) % mod, b[i], mod);
        res %= mod;
        res *= pow_mod(2, b[i] * (b[i] - 1) / 2, mod);
        res %= mod;
    }

    cout << res << endl;
}
```
