# AtCoder Beginner Contest 087
## D - People on a Line
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

bool dfs(vector<vector<pair<int, long long>>>& graph, vector<long long>& dist, int idx, int d) {
    if (dist[idx] == (1LL << 48)) {
        dist[idx] = d;

        bool res = true;
        for (int i = 0; i < static_cast<int>(graph[idx].size()); i++) {
            res = res && dfs(graph, dist, graph[idx][i].first, d + graph[idx][i].second);
        }

        return res;
    } else {
        return (dist[idx] == d);
    }
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<pair<int, long long>>> graph(n, vector<pair<int, long long>>(0));
    for (int i = 0; i < m; i++) {
        int l, r, d;
        cin >> l >> r >> d;
        graph[l - 1].push_back(make_pair(r - 1, d));
        graph[r - 1].push_back(make_pair(l - 1, -d));
    }

    bool res = true;
    vector<long long> dist(n, 1LL << 48);
    for (int i = 0; i < n; i++) {
        if (dist[i] == (1LL << 48)) {
            res = res && dfs(graph, dist, i, 0);
        }
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
