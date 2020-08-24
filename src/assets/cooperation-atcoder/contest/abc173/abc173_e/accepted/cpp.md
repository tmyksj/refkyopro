# AtCoder Beginner Contest 173
## E - Multiplication 4
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

    long long mod = 1000000007;

    vector<long long> b(0), c(0);
    for (int i = 0; i < n; i++) {
        if (a[i] < 0) {
            b.push_back(-a[i]);
        } else {
            c.push_back(a[i]);
        }
    }

    sort(b.begin(), b.end());
    sort(c.begin(), c.end());

    if (k == n) {
        long long res = 1;
        for (int i = 0; i < static_cast<int>(b.size()); i++) {
            res = res * b[i] % mod;
        }
        for (int i = 0; i < static_cast<int>(c.size()); i++) {
            res = res * c[i] % mod;
        }

        cout << (b.size() % 2 == 0 ? res : (mod - res) % mod) << endl;
    } else if (k % 2 == 1 && c.size() == 0) {
        long long res = 1;
        for (int i = 0; i < k; i++) {
            res = res * b[i] % mod;
        }

        cout << (mod - res) % mod << endl;
    } else {
        int bl = b.size() - 1, cl = c.size() - 1;
        for (int i = 0; i < k; i++) {
            if (bl >= 0 && (cl < 0 || b[bl] >= c[cl])) {
                bl--;
            } else {
                cl--;
            }
        }

        if ((b.size() - bl) % 2 == 0) {
            if (bl < 0 || cl == static_cast<int>(c.size()) - 1) {
                bl++;
                cl--;
            } else if (cl < 0) {
                bl--;
                cl++;
            } else if (b[bl] * b[bl + 1] >= c[cl] * c[cl + 1]) {
                bl--;
                cl++;
            } else {
                bl++;
                cl--;
            }
        }

        long long res = 1;
        for (int i = b.size() - 1; i > bl; i--) {
            res = res * b[i] % mod;
        }
        for (int i = c.size() - 1; i > cl; i--) {
            res = res * c[i] % mod;
        }

        cout << res << endl;
    }
}
```
