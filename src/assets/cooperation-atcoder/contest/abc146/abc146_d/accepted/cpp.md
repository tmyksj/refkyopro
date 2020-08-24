# AtCoder Beginner Contest 146
## D - Coloring Edges on Tree
```cpp
#include <algorithm>
#include <iostream>
#include <map>
#include <utility>
#include <vector>

using namespace std;

void dfs(int n, map<pair<int, int>, int>& id, vector<vector<int>>& graph, vector<int>& result, int prev, int cur) {
    for (int i = 0, j = 1; i < static_cast<int>(graph[cur].size()); i++) {
        if (graph[cur][i] != prev) {
            if (j == result[id[make_pair(prev, cur)]]) {
                j++;
            }

            result[id[make_pair(cur, graph[cur][i])]] = j;
            result[id[make_pair(graph[cur][i], cur)]] = j;
            j++;

            dfs(n, id, graph, result, cur, graph[cur][i]);
        }
    }
}

int main() {
    int n;
    cin >> n;

    map<pair<int, int>, int> id;
    vector<vector<int>> graph(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;

        id[make_pair(a - 1, b - 1)] = i;
        id[make_pair(b - 1, a - 1)] = i;

        graph[a - 1].push_back(b - 1);
        graph[b - 1].push_back(a - 1);
    }

    vector<int> result(n - 1, 0);
    for (int i = 0, j = 1; i < static_cast<int>(graph[0].size()); i++) {
        result[id[make_pair(0, graph[0][i])]] = j;
        result[id[make_pair(graph[0][i], 0)]] = j;
        j++;

        dfs(n, id, graph, result, 0, graph[0][i]);
    }

    int k = 0;
    for (int i = 0; i < n - 1; i++) {
        k = max(k, result[i]);
    }

    cout << k << endl;
    for (int i = 0; i < n - 1; i++) {
        cout << result[i] << endl;
    }
}
```
