# AtCoder Beginner Contest 067
## D - Fennec VS. Snuke
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> graph(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        graph[a - 1].push_back(b - 1);
        graph[b - 1].push_back(a - 1);
    }

    vector<int> bfs_fwd(n, 1 << 30);
    bfs_fwd[0] = 0;

    queue<int> que_fwd;
    que_fwd.push(0);
    while (!que_fwd.empty()) {
        int q = que_fwd.front();
        que_fwd.pop();

        for (int i = 0; i < static_cast<int>(graph[q].size()); i++) {
            if (bfs_fwd[graph[q][i]] > bfs_fwd[q] + 1) {
                bfs_fwd[graph[q][i]] = bfs_fwd[q] + 1;
                que_fwd.push(graph[q][i]);
            }
        }
    }

    vector<int> bfs_rev(n, 1 << 30);
    bfs_rev[n - 1] = 0;

    queue<int> que_rev;
    que_rev.push(n - 1);
    while (!que_rev.empty()) {
        int q = que_rev.front();
        que_rev.pop();

        for (int i = 0; i < static_cast<int>(graph[q].size()); i++) {
            if (bfs_rev[graph[q][i]] > bfs_rev[q] + 1) {
                bfs_rev[graph[q][i]] = bfs_rev[q] + 1;
                que_rev.push(graph[q][i]);
            }
        }
    }

    int f_pt = 0, s_pt = 0;
    for (int i = 0; i < n; i++) {
        if (bfs_fwd[i] <= bfs_rev[i]) {
            f_pt++;
        } else {
            s_pt++;
        }
    }

    cout << (f_pt > s_pt ? "Fennec" : "Snuke") << endl;
}
```
