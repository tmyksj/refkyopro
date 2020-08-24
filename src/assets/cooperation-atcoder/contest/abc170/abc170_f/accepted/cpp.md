# AtCoder Beginner Contest 170
## F - Pond Skater
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <queue>
#include <string>
#include <tuple>
#include <vector>

using namespace std;

int main() {
    int h, w, k, x1, y1, x2, y2;
    cin >> h >> w >> k >> x1 >> y1 >> x2 >> y2;

    vector<vector<bool>> c(h + 2, vector<bool>(w + 2, false));
    for (int i = 0; i < h; i++) {
        string s;
        cin >> s;

        for (int j = 0; j < w; j++) {
            c[i + 1][j + 1] = (s[j] == '.');
        }
    }

    int dx[] = { 0, -1, 1, 0 };
    int dy[] = { -1, 0, 0, 1 };

    long long inf = 1LL << 61;

    vector<vector<vector<long long>>> dp(h + 2, vector<vector<long long>>(w + 2, vector<long long>(4, inf)));
    priority_queue<tuple<long long, int, int, int>,
            vector<tuple<long long, int, int, int>>,
            greater<tuple<long long, int, int, int>>> que;
    for (int i = 0; i < 4; i++) {
        dp[x1][y1][i] = 0;
        que.push(make_tuple(0, x1, y1, i));
    }

    while (!que.empty()) {
        tuple<long long, int, int, int> q = que.top();
        que.pop();

        int x = get<1>(q);
        int y = get<2>(q);
        int d = get<3>(q);

        for (int i = 0; i < 4; i++) {
            if (i == d && c[x + dx[i]][y + dy[i]] && dp[x + dx[i]][y + dy[i]][i] > dp[x][y][d] + 1) {
                dp[x + dx[i]][y + dy[i]][i] = dp[x][y][d] + 1;
                que.push(make_tuple(dp[x + dx[i]][y + dy[i]][i], x + dx[i], y + dy[i], i));
            } else if (i != d && dp[x][y][i] > ((dp[x][y][d] + k - 1) / k) * k) {
                dp[x][y][i] = ((dp[x][y][d] + k - 1) / k) * k;
                que.push(make_tuple(dp[x][y][i], x, y, i));
            }
        }
    }

    long long r = *min_element(dp[x2][y2].begin(), dp[x2][y2].end());
    cout << (r < inf ? (r + k - 1) / k : -1) << endl;
}
```
