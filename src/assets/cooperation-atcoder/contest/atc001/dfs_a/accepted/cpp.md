# AtCoder Typical Contest 001
## A - 深さ優先探索
```cpp
#include <iostream>
#include <stack>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> c(h);
    for (int i = 0; i < h; i++) {
        cin >> c[i];
    }

    int sy, sx, gy, gx;
    vector<vector<int>> m(h + 2, vector<int>(w + 2, 0));
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= w; j++) {
            if (c[i - 1][j - 1] == 's') {
                m[i][j] = 1;
                sy = i;
                sx = j;
            } else if (c[i - 1][j - 1] == 'g') {
                m[i][j] = 1;
                gy = i;
                gx = j;
            } else if (c[i - 1][j - 1] == '.') {
                m[i][j] = 1;
            }
        }
    }

    bool res = false;

    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };

    stack<pair<int, int>> s;
    s.push(make_pair(sy, sx));
    while (!s.empty()) {
        pair<int, int> p = s.top();
        s.pop();

        if (p.first == gy && p.second == gx) {
            res = true;
        } else if (m[p.first][p.second] == 1) {
            m[p.first][p.second] = 0;
            for (int i = 0; i < 4; i++) {
                s.push(make_pair(p.first + dy[i], p.second + dx[i]));
            }
        }
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
