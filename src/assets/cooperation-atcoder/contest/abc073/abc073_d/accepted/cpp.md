# AtCoder Beginner Contest 073
## D - joisino's travel
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

long long dfs(int n, int r,
        vector<int>& ri, vector<vector<long long>>& graph,
        long long cur_d, int cur_r, int cur_pos) {
    if (cur_r == (1 << r) - 1) {
        return cur_d;
    }

    long long res = (1LL << 48);
    for (int i = 0; i < r; i++) {
        if ((cur_r & (1 << i)) == 0) {
            res = min(res, dfs(n, r, ri, graph,
                    cur_pos == -1 ? 0 : cur_d + graph[cur_pos][ri[i]], cur_r | (1 << i), ri[i]));
        }
    }

    return res;
}

int main() {
    int n, m, r;
    cin >> n >> m >> r;

    vector<int> ri(n);
    for (int i = 0; i < r; i++) {
        cin >> ri[i];
        ri[i]--;
    }

    vector<vector<long long>> graph(n, vector<long long>(n, (1LL << 48)));
    for (int i = 0; i < m; i++) {
        int a, b, c;
        cin >> a >> b >> c;
        graph[a - 1][b - 1] = c;
        graph[b - 1][a - 1] = c;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                if (graph[j][k] > graph[j][i] + graph[i][k]) {
                    graph[j][k] = graph[j][i] + graph[i][k];
                }
            }
        }
    }

    cout << dfs(n, r, ri, graph, 0, 0, -1) << endl;
}
```
