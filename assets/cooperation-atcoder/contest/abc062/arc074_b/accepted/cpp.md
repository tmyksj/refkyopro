# AtCoder Beginner Contest 062
## D - 3N Numbers
```cpp
#include <algorithm>
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(3 * n);
    for (int i = 0; i < 3 * n; i++) {
        cin >> a[i];
    }

    vector<long long> l_max(3 * n, 0);
    multiset<long long> l_set;
    long long l_sum = 0;
    for (int i = 0; i < n; i++) {
        l_sum += a[i];
        l_set.insert(a[i]);
        l_max[i] = l_sum;
    }
    for (int i = n; i <= 2 * n; i++) {
        multiset<long long>::iterator ite = l_set.begin();
        if (a[i] > *ite) {
            l_sum += a[i] - *ite;
            l_set.insert(a[i]);
            l_set.erase(ite);
        }

        l_max[i] = l_sum;
    }

    vector<long long> r_min(3 * n, 0);
    multiset<long long> r_set;
    long long r_sum = 0;
    for (int i = 3 * n - 1; i >= 2 * n; i--) {
        r_sum += a[i];
        r_set.insert(a[i]);
        r_min[i] = r_sum;
    }
    for (int i = 2 * n - 1; i >= n - 1; i--) {
        multiset<long long>::reverse_iterator ite = r_set.rbegin();
        if (a[i] < *ite) {
            r_sum += a[i] - *ite;
            r_set.insert(a[i]);
            r_set.erase(r_set.find(*ite));
        }

        r_min[i] = r_sum;
    }

    long long res = l_max[n - 1] - r_min[n];
    for (int i = n; i < 2 * n; i++) {
        res = max(res, l_max[i] - r_min[i + 1]);
    }

    cout << res << endl;
}
```
