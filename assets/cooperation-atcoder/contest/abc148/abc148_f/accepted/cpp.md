# AtCoder Beginner Contest 148
## F - Playing Tag on Tree
```cpp
#include <algorithm>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

void bfs(vector<vector<int>>& t, vector<int>& d, int s) {
    int n = t.size();
    for (int i = 0; i < n; i++) {
        d[i] = n;
    }

    d[s] = 0;

    priority_queue<int> que;
    que.push(s);
    while (!que.empty()) {
        int q = que.top();
        que.pop();

        for (int i = 0; i < static_cast<int>(t[q].size()); i++) {
            if (d[t[q][i]] > d[q] + 1) {
                d[t[q][i]] = d[q] + 1;
                que.push(t[q][i]);
            }
        }
    }
}

int main() {
    int n, u, v;
    cin >> n >> u >> v;
    u--;
    v--;

    vector<vector<int>> t(n, vector<int>(0));
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        t[a - 1].push_back(b - 1);
        t[b - 1].push_back(a - 1);
    }

    vector<int> d_u(n), d_v(n);
    bfs(t, d_u, u);
    bfs(t, d_v, v);

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (d_u[i] < d_v[i]) {
            res = max(res, d_v[i] - 1);
        }
    }

    cout << res << endl;
}
```
