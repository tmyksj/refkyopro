# Tenka1 Programmer Beginner Contest
## C - Align
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    sort(a.begin(), a.end());

    long long res = 0, l = 0, r = 0;
    for (int i = 1, j = n - 1; i <= j; ) {
        long long li = abs(a[l] - a[i]);
        long long lj = abs(a[l] - a[j]);
        long long ri = abs(a[r] - a[i]);
        long long rj = abs(a[r] - a[j]);
        long long m = max({ li, lj, ri, rj });

        if (li == m) {
            l = i;
            i++;
        } else if (lj == m) {
            l = j;
            j--;
        } else if (ri == m) {
            r = i;
            i++;
        } else {
            r = j;
            j--;
        }

        res += m;
    }

    cout << res << endl;
}
```
