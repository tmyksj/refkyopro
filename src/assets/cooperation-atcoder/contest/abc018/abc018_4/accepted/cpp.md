# AtCoder Beginner Contest 018
## D - バレンタインデー
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, p, q, r;
    cin >> n >> m >> p >> q >> r;

    vector<int> x(r), y(r), z(r);
    for (int i = 0; i < r; i++) {
        cin >> x[i] >> y[i] >> z[i];
        x[i]--;
        y[i]--;
    }

    int res = 0;
    for (int i = 0; i < (1 << n); i++) {
        int c = 0;
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                c++;
            }
        }

        if (c == p) {
            vector<int> s(m, 0);
            for (int j = 0; j < r; j++) {
                if ((i & (1 << x[j])) > 0) {
                    s[y[j]] += z[j];
                }
            }

            sort(s.begin(), s.end(), greater<int>());

            int t = 0;
            for (int j = 0; j < q; j++) {
                t += s[j];
            }

            res = max(res, t);
        }
    }

    cout << res << endl;
}
```
