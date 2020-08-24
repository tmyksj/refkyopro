# AtCoder Beginner Contest 142
## D - Disjoint Set of Common Divisors
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 1000001;
    vector<bool> prime(n, true);
    prime[0] = prime[1] = false;
    for (int i = 2; i < n; i++) {
        if (prime[i]) {
            for (int j = 2 * i; j < n; j += i) {
                prime[j] = false;
            }
        }
    }

    long long a, b;
    cin >> a >> b;

    long long ia = a;
    vector<long long> a_fact(1, 1);
    for (long long i = 2; i < n; i++) {
        if (prime[i] && ia % i == 0) {
            a_fact.push_back(i);
            while (ia % i == 0) {
                ia /= i;
            }
        }
    }
    if (ia > n - 1) {
        a_fact.push_back(ia);
    }

    long long ib = b;
    vector<long long> b_fact(1, 1);
    for (long long i = 2; i < n; i++) {
        if (prime[i] && ib % i == 0) {
            b_fact.push_back(i);
            while (ib % i == 0) {
                ib /= i;
            }
        }
    }
    if (ib > n - 1) {
        b_fact.push_back(ib);
    }

    int res = 0;
    for (int ia = 0, ib = 0;
            ia < static_cast<int>(a_fact.size()) && ib < static_cast<int>(b_fact.size()); ) {
        if (a_fact[ia] == b_fact[ib]) {
            res++;
            ia++;
            ib++;
        } else if (a_fact[ia] < b_fact[ib]) {
            ia++;
        } else {
            ib++;
        }
    }

    cout << res << endl;
}
```
