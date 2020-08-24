# AtCoder Beginner Contest 017
## C - ハイスコア
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> l(n), r(n), s(n);
    for (int i = 0; i < n; i++) {
        cin >> l[i] >> r[i] >> s[i];
        l[i]--;
        r[i]--;
    }

    vector<int> p(m + 1, 0);
    for (int i = 0; i < n; i++) {
        p[l[i]] += s[i];
        p[r[i] + 1] -= s[i];
    }
    for (int i = 0; i < m; i++) {
        p[i + 1] += p[i];
    }

    int res = 0, sum = accumulate(s.begin(), s.end(), 0);
    for (int i = 0; i < m; i++) {
        res = max(res, sum - p[i]);
    }

    cout << res << endl;
}
```
