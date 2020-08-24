# AtCoder Beginner Contest 143
## E - Travel by Car
```cpp
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m, l;
    cin >> n >> m >> l;

    vector<vector<pair<int, long long>>> graph(n, vector<pair<int, long long>>(0));
    for (int i = 0; i < m; i++) {
        int a, b, c;
        cin >> a >> b >> c;
        graph[a - 1].push_back(make_pair(b - 1, c));
        graph[b - 1].push_back(make_pair(a - 1, c));
    }

    vector<vector<bool>> reachable_tmp(n, vector<bool>(n, false));
    vector<vector<long long>> reachable_rem(n, vector<long long>(n, 0));
    for (int i = 0; i < n; i++) {
        reachable_tmp[i][i] = true;
        reachable_rem[i][i] = l;

        priority_queue<pair<long long, int>> que;
        que.push(make_pair(l, i));
        while (!que.empty()) {
            pair<long long, int> q = que.top();
            que.pop();

            for (int j = 0; j < static_cast<int>(graph[q.second].size()); j++) {
                if (q.first - graph[q.second][j].second >= reachable_rem[i][graph[q.second][j].first]) {
                    reachable_tmp[i][graph[q.second][j].first] = true;
                    reachable_rem[i][graph[q.second][j].first] = q.first - graph[q.second][j].second;
                    que.push(make_pair(q.first - graph[q.second][j].second, graph[q.second][j].first));
                }
            }
        }
    }

    vector<vector<int>> reachable(n, vector<int>(0));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i != j && reachable_tmp[i][j]) {
                reachable[i].push_back(j);
            }
        }
    }

    int inf = 1000000000;
    vector<vector<int>> res(n, vector<int>(n, inf));
    for (int i = 0; i < n; i++) {
        res[i][i] = 0;

        queue<int> que;
        for (int j = 0; j < static_cast<int>(reachable[i].size()); j++) {
            res[i][reachable[i][j]] = 0;
            que.push(reachable[i][j]);
        }

        while (!que.empty()) {
            queue<int> que_next;
            while (!que.empty()) {
                int q = que.front();
                que.pop();

                for (int j = 0; j < static_cast<int>(reachable[q].size()); j++) {
                    if (res[i][reachable[q][j]] > res[i][q] + 1) {
                        res[i][reachable[q][j]] = res[i][q] + 1;
                        que_next.push(reachable[q][j]);
                    }
                }
            }

            que = que_next;
        }
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        int s, t;
        cin >> s >> t;
        cout << (res[s - 1][t - 1] < inf ? res[s - 1][t - 1] : -1) << endl;
    }
}
```
