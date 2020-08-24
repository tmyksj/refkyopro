# AtCoder Beginner Contest 054
## C - One-stroke Path
```cpp
#include <iostream>
#include <vector>

using namespace std;

int dfs(int n, vector<vector<int>>& graph, int p, int s) {
    if (s == (1 << n) - 1) {
        return 1;
    }

    int r = 0;
    for (int i = 0; i < static_cast<int>(graph[p].size()); i++) {
        if ((s & (1 << graph[p][i])) == 0) {
            r += dfs(n, graph, graph[p][i], s | (1 << graph[p][i]));
        }
    }

    return r;
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> graph(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        graph[a - 1].push_back(b - 1);
        graph[b - 1].push_back(a - 1);
    }

    cout << dfs(n, graph, 0, 1) << endl;
}
```
