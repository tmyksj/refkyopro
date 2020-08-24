# AtCoder Beginner Contest 020
## C - 壁抜け
```cpp
#include <iostream>
#include <queue>
#include <string>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int h, w, t;
    cin >> h >> w >> t;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    int p_sy, p_sx, p_gy, p_gx;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (s[i][j] == 'S') {
                p_sy = i;
                p_sx = j;
            } else if (s[i][j] == 'G') {
                p_gy = i;
                p_gx = j;
            }
        }
    }

    int l = 1, r = t;
    while (l < r) {
        int m = l + (r - l + 1) / 2;

        vector<vector<long long>> g(h, vector<long long>(w, 1LL << 61));
        g[p_sy][p_sx] = 0;

        priority_queue<tuple<long long, int, int>,
                vector<tuple<long long, int, int>>,
                greater<tuple<long long, int, int>>> que;
        que.push(make_tuple(0, p_sy, p_sx));
        while (!que.empty()) {
            tuple<long long, int, int> q = que.top();
            que.pop();

            int p_y = get<1>(q);
            int p_x = get<2>(q);

            int dy[] = { -1, 0, 0, 1 };
            int dx[] = { 0, -1, 1, 0 };
            for (int i = 0; i < 4; i++) {
                if (0 <= p_y + dy[i] && p_y + dy[i] < h && 0 <= p_x + dx[i] && p_x + dx[i] < w) {
                    long long d = g[p_y][p_x] + (s[p_y + dy[i]][p_x + dx[i]] == '#' ? m : 1);
                    if (g[p_y + dy[i]][p_x + dx[i]] > d) {
                        g[p_y + dy[i]][p_x + dx[i]] = d;
                        que.push(make_tuple(g[p_y + dy[i]][p_x + dx[i]], p_y + dy[i], p_x + dx[i]));
                    }
                }
            }
        }

        if (g[p_gy][p_gx] <= t) {
            l = m;
        } else {
            r = m - 1;
        }
    }

    cout << l << endl;
}
```
