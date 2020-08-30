# AtCoder Beginner Contest 175
## D - Moving Piece
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
        p[i]--;
    }

    vector<long long> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    long long res = -(1LL << 61);
    for (int i = 0; i < n; i++) {
        vector<int> q(0);
        vector<bool> r(n, true);

        for (int j = i; r[j]; j = p[j]) {
            q.push_back(j);
            r[j] = false;
        }

        int s = q.size();

        vector<long long> d(s, 0);
        for (int j = 0; j < s; j++) {
            d[(j + 1) % s] = d[j] + c[q[(j + 1) % s]];
        }

        for (int j = 0; j < min(k, s); j++) {
            res = max({ res, d[(j + 1) % s], d[(j + 1) % s] + d[0] * (k / s - (j < k % s ? 0 : 1)) });
        }
    }

    cout << res << endl;
}
```
