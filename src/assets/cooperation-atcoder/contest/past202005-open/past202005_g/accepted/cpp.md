# 第三回 アルゴリズム実技検定
## G - グリッド金移動
```cpp
#include <iostream>
#include <queue>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int n, x, y;
    cin >> n >> x >> y;

    int b = 210, inf = b * b + 1;
    vector<vector<int>> d(2 * b + 1, vector<int>(2 * b + 1, inf));
    for (int i = 0; i < n; i++) {
        int xi, yi;
        cin >> xi >> yi;
        d[xi + b][yi + b] = -1;
    }
    d[b][b] = 0;

    priority_queue<tuple<int, int, int>,
            vector<tuple<int, int, int>>,
            greater<tuple<int, int, int>>> que;
    que.push(make_tuple(0, b, b));
    while (!que.empty()) {
        int xi = get<1>(que.top()), yi = get<2>(que.top());
        que.pop();

        int dx[] = { 1, 0, -1, 1, -1, 0 };
        int dy[] = { 1, 1, 1, 0, 0, -1 };

        for (int i = 0; i < 6; i++) {
            if (0 <= xi + dx[i] && xi + dx[i] <= 2 * b
                    && 0 <= yi + dy[i] && yi + dy[i] <= 2 * b
                    && d[xi + dx[i]][yi + dy[i]] > d[xi][yi] + 1) {
                d[xi + dx[i]][yi + dy[i]] = d[xi][yi] + 1;
                que.push(make_tuple(d[xi + dx[i]][yi + dy[i]], xi + dx[i], yi + dy[i]));
            }
        }
    }

    cout << (d[x + b][y + b] < inf ? d[x + b][y + b] : -1) << endl;
}
```
