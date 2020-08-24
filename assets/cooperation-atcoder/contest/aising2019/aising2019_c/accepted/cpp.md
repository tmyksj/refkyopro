# エイシング プログラミング コンテスト 2019
## C - Alternating Path
```cpp
#include <iostream>
#include <queue>
#include <string>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    long long res = 0;

    vector<vector<bool>> c(h, vector<bool>(w, false));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (c[i][j]) {
                continue;
            }

            c[i][j] = true;

            long long cb = 0, cw = 0;
            queue<pair<int, int>> que;
            que.push(make_pair(i, j));
            while (!que.empty()) {
                pair<int, int> q = que.front();
                que.pop();

                int y = q.first;
                int x = q.second;

                if (s[y][x] == '#') {
                    cb++;
                } else {
                    cw++;
                }

                int dy[] = { -1, 0, 0, 1 };
                int dx[] = { 0, -1, 1, 0 };
                for (int k = 0; k < 4; k++) {
                    if (0 <= y + dy[k] && y + dy[k] < h
                            && 0 <= x + dx[k] && x + dx[k] < w
                            && s[y][x] != s[y + dy[k]][x + dx[k]] && !c[y + dy[k]][x + dx[k]]) {
                        c[y + dy[k]][x + dx[k]] = true;
                        que.push(make_pair(y + dy[k], x + dx[k]));
                    }
                }
            }

            res += cb * cw;
        }
    }

    cout << res << endl;
}
```
