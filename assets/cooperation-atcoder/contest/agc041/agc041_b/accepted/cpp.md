# AtCoder Grand Contest 041
## B - Voting Judges
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, m, v, p;
    cin >> n >> m >> v >> p;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    sort(a.begin(), a.end(), greater<long long>());

    int left = 0, right = n;
    while (right - left > 1) {
        int mid = (left + right) / 2;

        long long s = 0;
        for (int i = 0; i < n; i++) {
            if (i < p - 1 || mid <= i) {
                s += m;
            } else {
                s += a[mid] + m - a[i];
            }
        }

        if (a[mid] + m >= a[p - 1] && s >= m * v) {
            left = mid;
        } else {
            right = mid;
        }
    }

    cout << left + 1 << endl;
}
```
