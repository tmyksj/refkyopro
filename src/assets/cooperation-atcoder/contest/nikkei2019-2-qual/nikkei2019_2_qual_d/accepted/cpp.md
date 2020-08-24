# 第二回全国統一プログラミング王決定戦予選
## D - Shortest Path on a Line
```cpp
#include <algorithm>
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<long long>> in(n, vector<long long>(0)), out(n, vector<long long>(0));
    vector<long long> c(m);
    for (int i = 0; i < m; i++) {
        int l, r;
        cin >> l >> r >> c[i];
        in[l - 1].push_back(i);
        out[r - 1].push_back(i);
    }

    vector<long long> dist(n, 1LL << 48), dist_c(m, 1LL << 48);
    dist[0] = 0;

    multiset<long long> dist_set;

    for (int i = 0; i < n; i++) {
        if (dist_set.size() > 0) {
            dist[i] = min(dist[i], *dist_set.begin());
        }

        for (int j = 0; j < static_cast<int>(in[i].size()); j++) {
            dist_c[in[i][j]] = dist[i] + c[in[i][j]];
            dist_set.insert(dist_c[in[i][j]]);
        }

        for (int j = 0; j < static_cast<int>(out[i].size()); j++) {
            dist_set.erase(dist_set.find(dist_c[out[i][j]]));
        }
    }

    if (dist[n - 1] < (1LL << 48)) {
        cout << dist[n - 1] << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
