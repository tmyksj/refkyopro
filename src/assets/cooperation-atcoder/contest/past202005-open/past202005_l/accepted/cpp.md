# 第三回 アルゴリズム実技検定
## L - スーパーマーケット
```cpp
#include <iostream>
#include <queue>
#include <set>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> t(n, vector<int>(0));
    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;

        t[i].resize(k);
        for (int j = 0; j < k; j++) {
            cin >> t[i][j];
        }
    }

    int m;
    cin >> m;

    vector<int> a(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i];
    }

    priority_queue<pair<int, int>> q0, q1;
    for (int i = 0; i < n; i++) {
        q0.push(make_pair(t[i][0], i));
        if (t[i].size() >= 2) {
            q1.push(make_pair(t[i][1], i));
        }
    }

    set<int> s;

    vector<int> i(n, 1), res(m);
    for (int j = 0; j < m; j++) {
        while (!q0.empty() && s.find(q0.top().first) != s.end()) {
            q0.pop();
        }
        while (!q1.empty() && s.find(q1.top().first) != s.end()) {
            q1.pop();
        }

        if (a[j] == 1 || q1.empty() || q0.top().first >= q1.top().first) {
            pair<int, int> p = q0.top();
            q0.pop();

            if (i[p.second] < static_cast<int>(t[p.second].size())) {
                q0.push(make_pair(t[p.second][i[p.second]], p.second));
            }
            if (i[p.second] + 1 < static_cast<int>(t[p.second].size())) {
                q1.push(make_pair(t[p.second][i[p.second] + 1], p.second));
            }

            s.insert(p.first);

            i[p.second]++;
            res[j] = p.first;
        } else {
            pair<int, int> p = q1.top();
            q1.pop();

            if (i[p.second] + 1 < static_cast<int>(t[p.second].size())) {
                q1.push(make_pair(t[p.second][i[p.second] + 1], p.second));
            }

            s.insert(p.first);

            i[p.second]++;
            res[j] = p.first;
        }
    }

    for (int i = 0; i < m; i++) {
        cout << res[i] << endl;
    }
}
```
