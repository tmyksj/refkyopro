# AtCoder Beginner Contest 151
## D - Maze Master
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>
#include <string>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    vector<vector<char>> maze(h + 2, vector<char>(w + 2, '#'));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            maze[i + 1][j + 1] = s[i][j];
        }
    }

    int inf = 1000000000;
    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };

    int res = 0;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (maze[i + 1][j + 1] == '#') {
                continue;
            }

            vector<vector<int>> d(h + 2, vector<int>(w + 2, inf));
            d[i + 1][j + 1] = 0;

            priority_queue<pair<int, pair<int, int>>,
                    vector<pair<int, pair<int, int>>>,
                    greater<pair<int, pair<int, int>>>> que;
            que.push(make_pair(0, make_pair(i + 1, j + 1)));
            while (!que.empty()) {
                pair<int, pair<int, int>> p = que.top();
                que.pop();

                int y = p.second.first;
                int x = p.second.second;

                for (int k = 0; k < 4; k++) {
                    if (maze[y + dy[k]][x + dx[k]] == '.' && d[y][x] + 1 < d[y + dy[k]][x + dx[k]]) {
                        d[y + dy[k]][x + dx[k]] = d[y][x] + 1;
                        que.push(make_pair(d[y + dy[k]][x + dx[k]], make_pair(y + dy[k], x + dx[k])));
                    }
                }
            }

            for (int k = 0; k < h; k++) {
                for (int l = 0; l < w; l++) {
                    if (maze[k + 1][l + 1] == '.') {
                        res = max(res, d[k + 1][l + 1]);
                    }
                }
            }
        }
    }

    cout << res << endl;
}
```
