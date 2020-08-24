# AtCoder Beginner Contest 057
## B - Checkpoints
```cpp
#include <cstdlib>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<long long> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    vector<long long> c(m), d(m);
    for (int i = 0; i < m; i++) {
        cin >> c[i] >> d[i];
    }

    for (int i = 0; i < n; i++) {
        long long p = 0, r = 1LL << 61;
        for (int j = 0; j < m; j++) {
            if (r > abs(a[i] - c[j]) + abs(b[i] - d[j])) {
                p = j;
                r = abs(a[i] - c[j]) + abs(b[i] - d[j]);
            }
        }

        cout << p + 1 << endl;
    }
}
```
