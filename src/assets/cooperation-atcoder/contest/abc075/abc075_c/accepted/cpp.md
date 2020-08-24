# AtCoder Beginner Contest 075
## C - Bridge
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(m), b(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i] >> b[i];
    }

    int res = 0;
    for (int i = 0; i < m; i++) {
        vector<vector<int>> edge(n, vector<int>(0));
        for (int j = 0; j < m; j++) {
            if (i != j) {
                edge[a[j] - 1].push_back(b[j] - 1);
                edge[b[j] - 1].push_back(a[j] - 1);
            }
        }

        vector<bool> node(n, false);
        node[0] = true;

        queue<int> que;
        que.push(0);
        while (!que.empty()) {
            int q = que.front();
            que.pop();

            for (int j = 0; j < static_cast<int>(edge[q].size()); j++) {
                if (!node[edge[q][j]]) {
                    node[edge[q][j]] = true;
                    que.push(edge[q][j]);
                }
            }
        }

        for (int j = 0; j < n; j++) {
            if (!node[j]) {
                res++;
                break;
            }
        }
    }

    cout << res << endl;
}
```
