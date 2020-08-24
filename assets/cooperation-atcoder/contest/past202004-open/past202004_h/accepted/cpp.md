# 第二回 アルゴリズム実技検定
## H - 1-9 Grid
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<string> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int s, g;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (a[i][j] == 'S') {
                s = i * m + j;
            } else if (a[i][j] == 'G') {
                g = 9 * n * m + i * m + j;
            }
        }
    }

    long long inf = 1LL << 61;
    vector<long long> d(10 * n * m, inf);
    d[s] = 0;

    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> que;
    que.push(make_pair(0, s));
    while (!que.empty()) {
        int p = que.top().second;
        que.pop();

        int pz = p / m / n;
        int py = p / m % n;
        int px = p % m;

        int dy[] = { -1, 0, 0, 1 };
        int dx[] = { 0, -1, 1, 0 };
        for (int i = 0; i < 4; i++) {
            int qy = py + dy[i];
            int qx = px + dx[i];

            if (0 <= qy && qy < n && 0 <= qx && qx < m) {
                int aq = (a[qy][qx] == 'S' || a[qy][qx] == 'G' ? 0 : a[qy][qx] - '0');

                int qz = (aq - pz == 1 && pz < 9 ? pz + 1 : pz);
                int q = qz * n * m + qy * m + qx;

                if (d[q] > d[p] + 1) {
                    d[q] = d[p] + 1;
                    que.push(make_pair(d[q], q));
                }
            }
        }
    }

    cout << (d[g] < inf ? d[g] : -1) << endl;
}
```
