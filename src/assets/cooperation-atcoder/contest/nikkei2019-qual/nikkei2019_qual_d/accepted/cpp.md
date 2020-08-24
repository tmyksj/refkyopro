# 全国統一プログラミング王決定戦予選
## D - Restore the Tree
```cpp
#include <iostream>
#include <queue>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(n + m - 1), b(n + m - 1);
    for (int i = 0; i < n + m - 1; i++) {
        cin >> a[i] >> b[i];
    }

    vector<set<int>> s(n, set<int>()), t(n, set<int>());
    for (int i = 0; i < n + m - 1; i++) {
        s[a[i] - 1].insert(b[i] - 1);
        t[b[i] - 1].insert(a[i] - 1);
    }

    queue<int> que;
    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        if (t[i].size() == 0) {
            que.push(i);
            res[i] = -1;
        }
    }

    while (!que.empty()) {
        int q = que.front();
        que.pop();

        for (set<int>::iterator i = s[q].begin(); i != s[q].end(); i++) {
            t[*i].erase(q);
            if (t[*i].size() == 0) {
                que.push(*i);
                res[*i] = q;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << res[i] + 1 << endl;
    }
}
```
