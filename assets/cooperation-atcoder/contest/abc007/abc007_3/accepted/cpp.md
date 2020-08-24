# AtCoder Beginner Contest 007
## C - 幅優先探索
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <utility>
#include <string>
#include <vector>

using namespace std;

int main() {
    int r, c, sy, sx, gy, gx;
    cin >> r >> c >> sy >> sx >> gy >> gx;

    vector<string> s(r);
    for (int i = 0; i < r; i++) {
        cin >> s[i];
    }

    vector<vector<int>> d(r, vector<int>(c, r * c));
    d[sy - 1][sx - 1] = 0;

    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };

    priority_queue<pair<int, pair<int, int>>,
            vector<pair<int, pair<int, int>>>,
            greater<pair<int, pair<int, int>>>> que;
    que.push(make_pair(0, make_pair(sy - 1, sx - 1)));
    while (!que.empty()) {
        pair<int, int> p = que.top().second;
        que.pop();

        for (int i = 0; i < 4; i++) {
            if (s[p.first + dy[i]][p.second + dx[i]] == '.'
                    && d[p.first + dy[i]][p.second + dx[i]] > d[p.first][p.second] + 1) {
                d[p.first + dy[i]][p.second + dx[i]] = d[p.first][p.second] + 1;
                que.push(make_pair(d[p.first + dy[i]][p.second + dx[i]], make_pair(p.first + dy[i], p.second + dx[i])));
            }
        }
    }

    cout << d[gy - 1][gx - 1] << endl;
}
```
