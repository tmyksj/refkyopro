# 第一回 アルゴリズム実技検定 過去問
## J - 地ならし
```cpp
#include <algorithm>
#include <iostream>
#include <queue>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<long long>> a(h, vector<long long>(w));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cin >> a[i][j];
        }
    }

    long long inf = 1LL << 61;
    long long res = inf;

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            vector<vector<long long>> d(h, vector<long long>(w, inf));
            d[i][j] = 0;

            priority_queue<tuple<long long, int, int>,
                    vector<tuple<long long, int, int>>,
                    greater<tuple<long long, int, int>>> que;
            que.push(make_tuple(0, i, j));
            while (!que.empty()) {
                tuple<long long, int, int> q = que.top();
                que.pop();

                int y = get<1>(q);
                int x = get<2>(q);

                int dy[] = { -1, 0, 0, 1 };
                int dx[] = { 0, -1, 1, 0 };
                for (int k = 0; k < 4; k++) {
                    if (0 <= y + dy[k] && y + dy[k] < h
                            && 0 <= x + dx[k] && x + dx[k] < w
                            && d[y + dy[k]][x + dx[k]] > d[y][x] + a[y + dy[k]][x + dx[k]]) {
                        d[y + dy[k]][x + dx[k]] = d[y][x] + a[y + dy[k]][x + dx[k]];
                        que.push(make_tuple(d[y + dy[k]][x + dx[k]], y + dy[k], x + dx[k]));
                    }
                }
            }

            res = min(res, a[i][j] + d[0][w - 1] + d[h - 1][0] + d[h - 1][w - 1]);
        }
    }

    cout << res << endl;
}
```
