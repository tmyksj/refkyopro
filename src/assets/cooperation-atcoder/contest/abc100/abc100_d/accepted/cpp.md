# AtCoder Beginner Contest 100
## D - Patisserie ABC
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<long long> x(n), y(n), z(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i] >> z[i];
    }

    long long res = 0;
    for (int i = 0; i < 8; i++) {
        vector<long long> s(n);
        for (int j = 0; j < n; j++) {
            s[j] = ((i & 0b001) == 0 ? 1 : -1) * x[j]
                    + ((i & 0b010) == 0 ? 1 : -1) * y[j]
                    + ((i & 0b100) == 0 ? 1 : -1) * z[j];
        }

        sort(s.begin(), s.end(), greater<long long>());

        long long r = 0;
        for (int j = 0; j < m; j++) {
            r += s[j];
        }

        if (res < r) {
            res = r;
        }
    }

    cout << res << endl;
}
```
