# エイシング プログラミング コンテスト 2020
## D - Anything Goes to Zero
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string x;
    cin >> n >> x;

    vector<int> f(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        int c = 0;
        for (int j = 1; j <= i; j <<= 1) {
            if ((i & j) > 0) {
                c++;
            }
        }
        f[i] = f[i % c] + 1;
    }

    int p = 0;
    for (int i = 0; i < n; i++) {
        if (x[i] == '1') {
            p++;
        }
    }

    vector<int> res(n);
    if (p == 0) {
        for (int i = 0; i < n; i++) {
            res[i] = 1;
        }
    } else if (p == 1) {
        int q = 0;
        for (int i = 0, j = 1; i < n; i++, j <<= 1, j %= (p + 1)) {
            if (x[n - i - 1] == '1') {
                q = (q + j) % (p + 1);
            }
        }

        for (int i = 0, j = 1; i < n; i++, j <<= 1, j %= (p + 1)) {
            if (x[n - i - 1] == '0') {
                res[n - i - 1] = f[(q + j) % (p + 1)] + 1;
            } else {
                res[n - i - 1] = 0;
            }
        }
    } else {
        int q = 0, r = 0;
        for (int i = 0, j = 1, k = 1; i < n; i++, j <<= 1, j %= (p + 1), k <<= 1, k %= (p - 1)) {
            if (x[n - i - 1] == '1') {
                q = (q + j) % (p + 1);
                r = (r + k) % (p - 1);
            }
        }

        for (int i = 0, j = 1, k = 1; i < n; i++, j <<= 1, j %= (p + 1), k <<= 1, k %= (p - 1)) {
            if (x[n - i - 1] == '0') {
                res[n - i - 1] = f[(q + j) % (p + 1)] + 1;
            } else {
                res[n - i - 1] = f[(r - k + p - 1) % (p - 1)] + 1;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << res[i] << endl;
    }
}
```
