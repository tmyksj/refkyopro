# AtCoder Beginner Contest 132
## E - Hopscotch Addict
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> graph(3 * n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;

        graph[u - 1].push_back(n + v - 1);
        graph[n + u - 1].push_back(2 * n + v - 1);
        graph[2 * n + u - 1].push_back(v - 1);
    }

    int s, t;
    cin >> s >> t;

    long long inf = 1LL << 48;
    vector<long long> dist(3 * n, inf);
    dist[s - 1] = 0;

    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> que;
    que.push(make_pair(0, s - 1));
    while (!que.empty()) {
        pair<long long, int> cur = que.top();
        que.pop();

        for (int i = 0; i < static_cast<int>(graph[cur.second].size()); i++) {
            if (dist[graph[cur.second][i]] > dist[cur.second] + 1) {
                dist[graph[cur.second][i]] = dist[cur.second] + 1;
                que.push(make_pair(dist[cur.second] + 1, graph[cur.second][i]));
            }
        }
    }

    cout << (dist[t - 1] != inf ? dist[t - 1] / 3 : -1) << endl;
}
```
