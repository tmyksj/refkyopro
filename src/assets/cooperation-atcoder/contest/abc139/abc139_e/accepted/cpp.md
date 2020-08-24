# AtCoder Beginner Contest 139
## E - League
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> a(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - 1; j++) {
            cin >> a[i][j];
            a[i][j]--;
        }

        a[i][n - 1] = i;
    }

    queue<int> que;
    for (int i = 0; i < n; i++) {
        que.push(i);
    }

    vector<int> idx(n, 0);

    int res = 0;
    while (!que.empty()) {
        res++;

        queue<int> que_next;
        vector<bool> pushed(n, false);

        while (!que.empty()) {
            int p = que.front();
            que.pop();

            int q = a[p][idx[p]];
            if (p == a[q][idx[q]] && !pushed[p] && !pushed[q]) {
                pushed[p] = true;
                pushed[q] = true;

                if (idx[p] < n - 1) {
                    que_next.push(p);
                    idx[p]++;
                }

                if (idx[q] < n - 1) {
                    que_next.push(q);
                    idx[q]++;
                }
            }
        }

        que = que_next;
    }

    res--;

    bool ok = true;
    for (int i = 0; i < n; i++) {
        if (idx[i] < n - 1) {
            ok = false;
        }
    }

    cout << (ok ? res : -1) << endl;
}
```
