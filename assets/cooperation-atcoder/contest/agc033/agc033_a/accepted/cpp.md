# AtCoder Grand Contest 033
## A - Darker and Darker
```cpp
#include <iostream>
#include <queue>
#include <string>
#include <vector>

using namespace std;

int main() {
    int dy[] = { -1, 0, 0, 1 };
    int dx[] = { 0, -1, 1, 0 };

    int h, w;
    cin >> h >> w;

    vector<vector<char>> a(h + 2, vector<char>(w + 2, '#'));
    queue<pair<int, int>> que;
    for (int i = 1; i <= h; i++) {
        string s;
        cin >> s;

        for (int j = 1; j <= w; j++) {
            a[i][j] = s[j - 1];
            if (a[i][j] == '#') {
                que.push(make_pair(i, j));
            }
        }
    }
    que.push(make_pair(-1, -1));

    int cnt = 0;
    while (true) {
        pair<int, int> pos = que.front();
        que.pop();

        if (que.empty()) {
            break;
        } else if (pos.first == -1 && pos.second == -1) {
            que.push(make_pair(-1, -1));
            cnt++;
            continue;
        }

        for (int i = 0; i < 4; i++) {
            if (a[pos.first + dy[i]][pos.second + dx[i]] == '.') {
                a[pos.first + dy[i]][pos.second + dx[i]] = '#';
                que.push(make_pair(pos.first + dy[i], pos.second + dx[i]));
            }
        }
    }

    cout << cnt << endl;
}
```
