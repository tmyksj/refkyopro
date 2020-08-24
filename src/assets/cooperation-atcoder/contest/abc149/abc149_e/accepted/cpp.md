# AtCoder Beginner Contest 149
## E - Handshake
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    long long m;
    cin >> n >> m;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int a_max = *max_element(a.begin(), a.end());

    vector<long long> b(2 * a_max + 1, 0);
    for (int i = 0; i < n; i++) {
        b[a[i]]++;
    }
    for (int i = a_max; i > 0; i--) {
        b[i - 1] += b[i];
    }

    vector<long long> c(2 * a_max + 1, 0);
    for (int i = 0; i < n; i++) {
        c[a[i]] += a[i];
    }
    for (int i = a_max; i > 0; i--) {
        c[i - 1] += c[i];
    }

    int left = 0, right = 2 * a_max;
    while (left < right) {
        int mid = (left + right + 1) / 2;

        long long cnt = 0;
        for (int i = 0; i < n; i++) {
            cnt += b[max(mid - a[i], 0)];
        }

        if (cnt >= m) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    long long res = 0, cnt = 0;
    for (int i = 0; i < n; i++) {
        res += a[i] * b[max(left - a[i], 0)] + c[max(left - a[i], 0)];
        cnt += b[max(left - a[i], 0)];
    }
    res += left * (m - cnt);

    cout << res << endl;
}
```
