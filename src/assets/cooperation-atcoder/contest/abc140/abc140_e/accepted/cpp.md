# AtCoder Beginner Contest 140
## E - Second Sum
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <set>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
    }

    vector<pair<int, int>> q(n);
    for (int i = 0; i < n; i++) {
        q[i] = make_pair(p[i], i + 1);
    }

    sort(q.begin(), q.end(), greater<pair<int, int>>());

    multiset<int> s;
    s.insert(0);
    s.insert(0);
    s.insert(n + 1);
    s.insert(n + 1);

    long long res = 0;
    for (int i = 0; i < n; i++) {
        multiset<int>::iterator j = s.lower_bound(q[i].second);
        j--; j--;
        long long w = *j; j++;
        long long x = *j; j++;
        long long y = *j; j++;
        long long z = *j;

        res += q[i].first * ((x - w) * (y - q[i].second) + (q[i].second - x) * (z - y));
        s.insert(q[i].second);
    }

    cout << res << endl;
}
```
