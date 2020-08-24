# AtCoder Beginner Contest 088
## D - Grid Repainting
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <queue>
#include <string>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<char>> grid(h + 2, vector<char>(w + 2, '#'));
    for (int i = 1; i <= h; i++) {
        string s;
        cin >> s;

        for (int j = 1; j <= w; j++) {
            grid[i][j] =  s[j - 1];
        }
    }

    int blk = 0;
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if (grid[i][j] == '#') {
                blk++;
            }
        }
    }

    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };
    vector<vector<int>> dist(h + 2, vector<int>(w + 2, 1000000000));
    dist[1][1] = 0;

    priority_queue<pair<int, pair<int, int>>,
            vector<pair<int, pair<int, int>>>,
            greater<pair<int, pair<int, int>>>> que;
    que.push(make_pair(0, make_pair(1, 1)));
    while (!que.empty()) {
        pair<int, int> p = que.top().second;
        que.pop();

        for (int i = 0; i < 4; i++) {
            if (grid[p.first + dy[i]][p.second + dx[i]] == '.'
                    && dist[p.first + dy[i]][p.second + dx[i]] > dist[p.first][p.second] + 1) {
                dist[p.first + dy[i]][p.second + dx[i]] = dist[p.first][p.second] + 1;
                que.push(make_pair(dist[p.first + dy[i]][p.second + dx[i]],
                        make_pair(p.first + dy[i], p.second + dx[i])));
            }
        }
    }

    cout << max(-1, h * w - dist[h][w] - blk - 1) << endl;
}
```
