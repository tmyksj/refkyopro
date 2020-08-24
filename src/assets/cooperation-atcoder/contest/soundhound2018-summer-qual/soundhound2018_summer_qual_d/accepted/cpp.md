# SoundHound Inc. Programming Contest 2018 -Masters Tournament-
## D - Saving Snuuk
```cpp
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m, s, t;
    cin >> n >> m >> s >> t;

    vector<vector<pair<int, long long>>> ga(n, vector<pair<int, long long>>(0));
    vector<vector<pair<int, long long>>> gb(n, vector<pair<int, long long>>(0));
    for (int i = 0; i < m; i++) {
        int u, v, a, b;
        cin >> u >> v >> a >> b;
        ga[u - 1].push_back(make_pair(v - 1, a));
        ga[v - 1].push_back(make_pair(u - 1, a));
        gb[u - 1].push_back(make_pair(v - 1, b));
        gb[v - 1].push_back(make_pair(u - 1, b));
    }

    long long inf = 1LL << 61;

    vector<long long> ds(n, inf);
    ds[s - 1] = 0;
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> ques;
    ques.push(make_pair(0, s - 1));
    while (!ques.empty()) {
        int q = ques.top().second;
        ques.pop();

        for (int i = 0; i < static_cast<int>(ga[q].size()); i++) {
            if (ds[ga[q][i].first] > ds[q] + ga[q][i].second) {
                ds[ga[q][i].first] = ds[q] + ga[q][i].second;
                ques.push(make_pair(ds[ga[q][i].first], ga[q][i].first));
            }
        }
    }

    vector<long long> dt(n, inf);
    dt[t - 1] = 0;
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> quet;
    quet.push(make_pair(0, t - 1));
    while (!quet.empty()) {
        int q = quet.top().second;
        quet.pop();

        for (int i = 0; i < static_cast<int>(gb[q].size()); i++) {
            if (dt[gb[q][i].first] > dt[q] + gb[q][i].second) {
                dt[gb[q][i].first] = dt[q] + gb[q][i].second;
                quet.push(make_pair(dt[gb[q][i].first], gb[q][i].first));
            }
        }
    }

    vector<long long> res(n, ds[n - 1] + dt[n - 1]);
    for (int i = n - 2; i >= 0; i--) {
        res[i] = min(res[i + 1], ds[i] + dt[i]);
    }

    for (int i = 0; i < n; i++) {
        cout << 1000000000000000LL - res[i] << endl;
    }
}
```
