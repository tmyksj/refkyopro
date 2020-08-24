# AtCoder Beginner Contest 172
## C - Tsundoku
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, m, k;
    cin >> n >> m >> k;

    vector<long long> a(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        a[i] += a[i - 1];
    }

    vector<long long> b(m + 1, 0);
    for (int i = 1; i <= m; i++) {
        cin >> b[i];
        b[i] += b[i - 1];
    }

    int res = 0;
    for (int i = 0; i <= n && a[i] <= k; i++) {
        vector<long long>::iterator j = upper_bound(b.begin(), b.end(), k - a[i]);
        if (j != b.begin()) {
            res = max(res, i + static_cast<int>(j - b.begin()) - 1);
        }
    }

    cout << res << endl;
}
```
