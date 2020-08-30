# AtCoder Beginner Contest 176
## D - Wizard in Maze
```cpp
#include <iostream>
#include <queue>
#include <string>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int h, w, ch, cw, dh, dw;
    cin >> h >> w >> ch >> cw >> dh >> dw;
    ch--; cw--; dh--; dw--;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    int inf = 1 << 29;

    vector<vector<int>> dp(h, vector<int>(w, inf));
    dp[ch][cw] = 0;

    priority_queue<tuple<int, int, int>,
            vector<tuple<int, int, int>>,
            greater<tuple<int, int, int>>> que;
    que.push(make_tuple(0, ch, cw));
    while (!que.empty()) {
        tuple<int, int, int> q = que.top();
        que.pop();

        int y = get<1>(q);
        int x = get<2>(q);

        int dy[] = { -1, 0, 0, 1 };
        int dx[] = { 0, -1, 1, 0 };
        for (int i = 0; i < 4; i++) {
            if (0 <= y + dy[i] && y + dy[i] < h
                    && 0 <= x + dx[i] && x + dx[i] < w
                    && s[y + dy[i]][x + dx[i]] == '.'
                    && dp[y + dy[i]][x + dx[i]] > dp[y][x]) {
                dp[y + dy[i]][x + dx[i]] = dp[y][x];
                que.push(make_tuple(dp[y + dy[i]][x + dx[i]], y + dy[i], x + dx[i]));
            }
        }

        for (int i = -2; i <= 2; i++) {
            for (int j = -2; j <= 2; j++) {
                if (0 <= y + i && y + i < h
                        && 0 <= x + j && x + j < w
                        && s[y + i][x + j] == '.'
                        && dp[y + i][x + j] > dp[y][x] + 1) {
                    dp[y + i][x + j] = dp[y][x] + 1;
                    que.push(make_tuple(dp[y + i][x + j], y + i, x + j));
                }
            }
        }
    }

    cout << (dp[dh][dw] < inf ? dp[dh][dw] : -1) << endl;
}
```
