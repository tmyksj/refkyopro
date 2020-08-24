# AtCoder Beginner Contest 160
## E - Red and Green Apples
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int x, y, a, b, c;
    cin >> x >> y >> a >> b >> c;

    vector<long long> p(a);
    for (int i = 0; i < a; i++) {
        cin >> p[i];
    }

    vector<long long> q(b);
    for (int i = 0; i < b; i++) {
        cin >> q[i];
    }

    vector<long long> r(c);
    for (int i = 0; i < c; i++) {
        cin >> r[i];
    }

    sort(p.begin(), p.end(), greater<long long>());
    sort(q.begin(), q.end(), greater<long long>());
    sort(r.begin(), r.end(), greater<long long>());

    long long res = 0;
    for (int i = 0, j = 0, k = 0; i + j + k < x + y; ) {
        long long pi = (i < x ? p[i] : 0);
        long long qj = (j < y ? q[j] : 0);
        long long rk = (k < c ? r[k] : 0);
        long long m = max({ pi, qj, rk });

        res += m;
        if (pi == m) {
            i++;
        } else if (qj == m) {
            j++;
        } else {
            k++;
        }
    }

    cout << res << endl;
}
```
