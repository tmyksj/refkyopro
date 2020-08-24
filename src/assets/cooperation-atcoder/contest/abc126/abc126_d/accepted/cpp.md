# AtCoder Beginner Contest 126
## D - Even Relation
```cpp
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<pair<int, int>>> uvw(n, vector<pair<int, int>>());
    for (int i = 0; i < n - 1; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        uvw[u - 1].push_back(make_pair(v - 1, w));
        uvw[v - 1].push_back(make_pair(u - 1, w));
    }

    vector<int> color(n, -1);
    color[0] = 0;

    queue<int> que;
    que.push(0);
    while (!que.empty()) {
        int top = que.front();
        que.pop();

        for (int i = 0; i < uvw[top].size(); i++) {
            if (color[uvw[top][i].first] == -1) {
                color[uvw[top][i].first] = (color[top] + uvw[top][i].second) % 2;
                que.push(uvw[top][i].first);
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << color[i] << endl;
    }
}
```
