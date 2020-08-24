# AtCoder Beginner Contest 144
## E - Gluttony
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> f(n);
    for (int i = 0; i < n; i++) {
        cin >> f[i];
    }

    sort(a.begin(), a.end());
    sort(f.begin(), f.end());

    long long left = 0, right = 0;
    for (int i = 0; i < n; i++) {
        right = max(right, a[i] * f[n - i - 1]);
    }

    while (true) {
        long long mid = (left + right) / 2;

        long long k_req = 0;
        for (int i = 0; i < n; i++) {
            if (a[i] - mid / f[n - i - 1] > 0) {
                k_req += a[i] - mid / f[n - i - 1];
            }
        }

        if (k_req > k) {
            left = mid + 1;
        } else {
            right = mid;
        }

        if (right - left < 2) {
            k_req = 0;
            for (int i = 0; i < n; i++) {
                if (a[i] - left / f[n - i - 1] > 0) {
                    k_req += a[i] - left / f[n - i - 1];
                }
            }

            if (k_req > k) {
                left = right;
            }

            break;
        }
    }

    cout << left << endl;
}
```
