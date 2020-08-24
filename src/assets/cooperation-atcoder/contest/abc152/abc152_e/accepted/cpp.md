# AtCoder Beginner Contest 152
## E - Flatten
```cpp
#include <algorithm>
#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
    int a_max = 1000000;
    vector<bool> is_prime(a_max + 1, true);
    for (int i = 2; i <= a_max; i++) {
        if (is_prime[i]) {
            for (int j = 2 * i; j <= a_max; j += i) {
                is_prime[j] = false;
            }
        }
    }

    vector<int> prime(0);
    for (int i = 2; i <= a_max; i++) {
        if (is_prime[i]) {
            prime.push_back(i);
        }
    }

    int prime_size = prime.size();

    int mod = 1000000007;

    vector<long long> inv(a_max + 1, 0);
    inv[1] = 1;
    for (int i = 2; i <= a_max; i++) {
        inv[i] = mod - (inv[mod % i] * (mod / i)) % mod;
    }

    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    map<int, long long> lcm;
    for (int i = 0; i < n; i++) {
        map<int, long long> a_prime;
        for (int j = 0, k = a[i]; j < prime_size && k > 1; j++) {
            while (k % prime[j] == 0) {
                k /= prime[j];
                a_prime[prime[j]]++;
            }

            if (prime[j] * prime[j] > k) {
                a_prime[k]++;
                break;
            }
        }

        for (map<int, long long>::iterator j = a_prime.begin(); j != a_prime.end(); j++) {
            lcm[j->first] = max(lcm[j->first], j->second);
        }
    }

    long long lcm_mod = 1;
    for (map<int, long long>::iterator i = lcm.begin(); i != lcm.end(); i++) {
        for (int j = 0; j < i->second; j++) {
            lcm_mod *= i->first;
            lcm_mod %= mod;
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        long long r = lcm_mod;
        r *= inv[a[i]];
        r %= mod;
        res += r;
        res %= mod;
    }

    cout << res << endl;
}
```
