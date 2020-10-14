# AtCoder Regular Contest 039
## B - 高橋幼稚園
```cpp
#include <iostream>
#include <vector>

using namespace std;

class combination {
    vector<long long> inv;
    vector<long long> fact;
    vector<long long> fact_inv;
    long long mod;

public:
    combination(int n, int m) {
        inv = vector<long long>(n + 1, 0);
        fact = vector<long long>(n + 1, 0);
        fact_inv = vector<long long>(n + 1, 0);
        mod = m;

        inv[1] = 1;
        fact[0] = fact[1] = 1;
        fact_inv[0] = fact_inv[1] = 1;
        for (int i = 2; i <= n; i++) {
            inv[i] = mod - inv[mod % i] * (mod / i) % mod;
            fact[i] = fact[i - 1] * i % mod;
            fact_inv[i] = fact_inv[i - 1] * inv[i] % mod;
        }
    }

    int calc(int n, int k) {
        return fact[n] * fact_inv[k] % mod * fact_inv[n - k] % mod;
    }
};

int main() {
    int n, k;
    cin >> n >> k;

    combination nck(n + k - 1, 1000000007);
    if (n <= k) {
        cout << nck.calc(n, k % n) << endl;
    } else {
        cout << nck.calc(n + k - 1, k) << endl;
    }
}
```
