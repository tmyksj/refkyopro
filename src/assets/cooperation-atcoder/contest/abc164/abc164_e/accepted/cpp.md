# AtCoder Beginner Contest 164
## E - Two Currencies
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m, s;
    cin >> n >> m >> s;

    vector<int> u(m), v(m), a(m), b(m);
    for (int i = 0; i < m; i++) {
        cin >> u[i] >> v[i] >> a[i] >> b[i];
        u[i]--;
        v[i]--;
    }

    vector<int> c(n), d(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i] >> d[i];
    }

    int s_max = *max_element(a.begin(), a.end()) * (n - 1);
    vector<vector<pair<int, long long>>> graph(n * (s_max + 1), vector<pair<int, long long>>(0));
    for (int i = 0; i < m; i++) {
        for (int j = u[i] * (s_max + 1) + a[i]; j < (u[i] + 1) * (s_max + 1); j++) {
            graph[j].push_back(make_pair(v[i] * (s_max + 1) + j - u[i] * (s_max + 1) - a[i], b[i]));
        }
        for (int j = v[i] * (s_max + 1) + a[i]; j < (v[i] + 1) * (s_max + 1); j++) {
            graph[j].push_back(make_pair(u[i] * (s_max + 1) + j - v[i] * (s_max + 1) - a[i], b[i]));
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = i * (s_max + 1); j < (i + 1) * (s_max + 1); j++) {
            graph[j].push_back(make_pair(min(j + c[i], (i + 1) * (s_max + 1) - 1), d[i]));
        }
    }

    vector<long long> dist(n * (s_max + 1), 1LL << 61);
    dist[min(s, s_max)] = 0;

    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> que;
    que.push(make_pair(0, min(s, s_max)));
    while (!que.empty()) {
        int q = que.top().second;
        que.pop();

        for (int i = 0; i < static_cast<int>(graph[q].size()); i++) {
            if (dist[graph[q][i].first] > dist[q] + graph[q][i].second) {
                dist[graph[q][i].first] = dist[q] + graph[q][i].second;
                que.push(make_pair(dist[graph[q][i].first], graph[q][i].first));
            }
        }
    }

    for (int i = 1; i < n; i++) {
        cout << *min_element(dist.begin() + i * (s_max + 1), dist.begin() + (i + 1) * (s_max + 1)) << endl;
    }
}
```
