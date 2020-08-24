# AtCoder Beginner Contest 168
## D - .. (Double Dots)
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> g(n, vector<int>(0));
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a - 1].push_back(b - 1);
        g[b - 1].push_back(a - 1);
    }

    vector<int> res(n, -1);
    res[0] = 0;

    queue<int> que;
    que.push(0);
    while (!que.empty()) {
        int q = que.front();
        que.pop();

        for (int i = 0; i < static_cast<int>(g[q].size()); i++) {
            if (res[g[q][i]] < 0) {
                res[g[q][i]] = q;
                que.push(g[q][i]);
            }
        }
    }

    cout << "Yes" << endl;
    for (int i = 1; i < n; i++) {
        cout << res[i] + 1 << endl;
    }
}
```
