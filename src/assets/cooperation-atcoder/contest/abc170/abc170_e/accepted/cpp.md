# AtCoder Beginner Contest 170
## E - Smart Infants
```cpp
#include <algorithm>
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
        b[i]--;
    }

    vector<int> c(q), d(q);
    for (int i = 0; i < q; i++) {
        cin >> c[i] >> d[i];
        c[i]--;
        d[i]--;
    }

    int m = max(*max_element(b.begin(), b.end()), *max_element(d.begin(), d.end())) + 1;

    vector<multiset<int>> e(m, multiset<int>());
    for (int i = 0; i < n; i++) {
        e[b[i]].insert(a[i]);
    }

    multiset<int> f;
    for (int i = 0; i < m; i++) {
        if (e[i].size() > 0) {
            f.insert(*e[i].rbegin());
        }
    }

    for (int i = 0; i < q; i++) {
        f.erase(f.find(*e[b[c[i]]].rbegin()));
        if (e[d[i]].size() > 0) {
            f.erase(f.find(*e[d[i]].rbegin()));
        }

        e[b[c[i]]].erase(e[b[c[i]]].find(a[c[i]]));
        e[d[i]].insert(a[c[i]]);

        if (e[b[c[i]]].size() > 0) {
            f.insert(*e[b[c[i]]].rbegin());
        }
        f.insert(*e[d[i]].rbegin());

        b[c[i]] = d[i];

        cout << *f.begin() << endl;
    }
}
```
