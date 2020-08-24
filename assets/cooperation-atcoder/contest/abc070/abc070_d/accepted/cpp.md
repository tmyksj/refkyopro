# AtCoder Beginner Contest 070
## D - Transit Tree Path
```cpp
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<pair<int, long long>>> graph(n, vector<pair<int, long long>>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b, c;
        cin >> a >> b >> c;
        graph[a - 1].push_back(make_pair(b - 1, c));
        graph[b - 1].push_back(make_pair(a - 1, c));
    }

    int q, k;
    cin >> q >> k;

    vector<long long> dist(n, 1LL << 48);
    dist[k - 1] = 0;

    priority_queue<pair<long long, int>> que;
    que.push(make_pair(0, k - 1));
    while (!que.empty()) {
        pair<long long, int> p = que.top();
        que.pop();

        for (int i = 0; i < static_cast<int>(graph[p.second].size()); i++) {
            if (dist[graph[p.second][i].first] > dist[p.second] + graph[p.second][i].second) {
                dist[graph[p.second][i].first] = dist[p.second] + graph[p.second][i].second;
                que.push(make_pair(dist[graph[p.second][i].first], graph[p.second][i].first));
            }
        }
    }

    for (int i = 0; i < q; i++) {
        int x, y;
        cin >> x >> y;
        cout << dist[x - 1] + dist[y - 1] << endl;
    }
}
```
