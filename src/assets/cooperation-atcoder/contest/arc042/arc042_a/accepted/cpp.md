# AtCoder Regular Contest 042
## A - 掲示板
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i];
        a[i]--;
    }

    vector<pair<int, int>> b(n);
    for (int i = 0; i < n; i++) {
        b[i] = make_pair(m, i);
    }
    for (int i = 0; i < m; i++) {
        b[a[i]].first = m - i - 1;
    }

    sort(b.begin(), b.end());

    for (int i = 0; i < n; i++) {
        cout << b[i].second + 1 << endl;
    }
}
```
