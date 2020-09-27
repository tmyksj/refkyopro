# AtCoder Beginner Contest 179
## F - Simplified Reversi
```cpp
#include <functional>
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    long long n, q;
    cin >> n >> q;

    set<long long, greater<long long>> st_c, st_r;
    st_c.insert(0);
    st_r.insert(0);

    vector<long long> v_c(n, 0), v_r(n, 0);
    v_c[0] = n - 2;
    v_r[0] = n - 2;

    long long res = (n - 2) * (n - 2);
    for (int i = 0; i < q; i++) {
        int q_i, x;
        cin >> q_i >> x;

        if (q_i == 1) {
            set<long long>::iterator j = st_c.lower_bound(x);
            st_c.insert(x);
            v_c[x] = v_c[*j];
            if (*j == 0) {
                v_r[0] = x - 2;
            }

            res -= v_c[*j];
        } else {
            set<long long>::iterator j = st_r.lower_bound(x);
            st_r.insert(x);
            v_r[x] = v_r[*j];
            if (*j == 0) {
                v_c[0] = x - 2;
            }

            res -= v_r[x];
        }
    }

    cout << res << endl;
}
```
