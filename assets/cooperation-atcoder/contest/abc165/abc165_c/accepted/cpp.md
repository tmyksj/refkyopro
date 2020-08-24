# AtCoder Beginner Contest 165
## C - Many Requirements
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

long long solve(int n, int m, int q,
        vector<int>& a, vector<int>& b, vector<int>& c, vector<int>& d,
        vector<int>& h) {
    if (n == static_cast<int>(h.size())) {
        long long res = 0;
        for (int i = 0; i < q; i++) {
            if (h[b[i] - 1] - h[a[i] - 1] == c[i]) {
                res += d[i];
            }
        }
        return res;
    }

    long long res = 0;
    for (int i = (h.size() == 0 ? 1 : h[h.size() - 1]); i <= m; i++) {
        h.push_back(i);
        res = max(res, solve(n, m, q, a, b, c, d, h));
        h.pop_back();
    }

    return res;
}

int main() {
    int n, m, q;
    cin >> n >> m >> q;

    vector<int> a(q), b(q), c(q), d(q);
    for (int i = 0; i < q; i++) {
        cin >> a[i] >> b[i] >> c[i] >> d[i];
    }

    vector<int> h(0);
    cout << solve(n, m, q, a, b, c, d, h) << endl;
}
```
