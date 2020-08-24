# AtCoder Beginner Contest 035
## D - トレジャーハント
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m, t;
    cin >> n >> m >> t;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<vector<pair<int, int>>> abc(n, vector<pair<int, int>>(0)), bac(n, vector<pair<int, int>>(0));
    for (int i = 0; i < m; i++) {
        int a, b, c;
        cin >> a >> b >> c;
        abc[a - 1].push_back(make_pair(b - 1, c));
        bac[b - 1].push_back(make_pair(a - 1, c));
    }

    long long inf = 1LL << 61;

    vector<long long> d_fwd(n, inf);
    d_fwd[0] = 0;
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> que_fwd;
    que_fwd.push(make_pair(0, 0));
    while (!que_fwd.empty()) {
        pair<long long, int> p = que_fwd.top();
        que_fwd.pop();

        for (int i = 0; i < static_cast<int>(abc[p.second].size()); i++) {
            if (d_fwd[abc[p.second][i].first] > d_fwd[p.second] + abc[p.second][i].second) {
                d_fwd[abc[p.second][i].first] = d_fwd[p.second] + abc[p.second][i].second;
                que_fwd.push(make_pair(d_fwd[abc[p.second][i].first], abc[p.second][i].first));
            }
        }
    }
    
    vector<long long> d_rev(n, inf);
    d_rev[0] = 0;
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> que_rev;
    que_rev.push(make_pair(0, 0));
    while (!que_rev.empty()) {
        pair<long long, int> p = que_rev.top();
        que_rev.pop();

        for (int i = 0; i < static_cast<int>(bac[p.second].size()); i++) {
            if (d_rev[bac[p.second][i].first] > d_rev[p.second] + bac[p.second][i].second) {
                d_rev[bac[p.second][i].first] = d_rev[p.second] + bac[p.second][i].second;
                que_rev.push(make_pair(d_rev[bac[p.second][i].first], bac[p.second][i].first));
            }
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        if (d_fwd[i] < inf && d_rev[i] < inf) {
            res = max(res, (t - d_fwd[i] - d_rev[i]) * a[i]);
        }
    }

    cout << res << endl;
}
```
