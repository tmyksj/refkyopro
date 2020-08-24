# AtCoder Beginner Contest 137
## E - Coins Respawn
```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    int n, m, p;
    cin >> n >> m >> p;

    vector<int> a(m), b(m), c(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i] >> b[i] >> c[i];
        a[i]--;
        b[i]--;
        c[i] = p - c[i];
    }

    vector<bool> reach_fwd(n, false);
    reach_fwd[0] = true;
    queue<int> que_fwd;
    que_fwd.push(0);
    while (!que_fwd.empty()) {
        int fwd = que_fwd.front();
        que_fwd.pop();

        for (int i = 0; i < m; i++) {
            if (a[i] == fwd && !reach_fwd[b[i]]) {
                reach_fwd[b[i]] = true;
                que_fwd.push(b[i]);
            }
        }
    }

    vector<bool> reach_rev(n, false);
    reach_rev[n - 1] = true;
    queue<int> que_rev;
    que_rev.push(n - 1);
    while (!que_rev.empty()) {
        int rev = que_rev.front();
        que_rev.pop();

        for (int i = 0; i < m; i++) {
            if (b[i] == rev && !reach_rev[a[i]]) {
                reach_rev[a[i]] = true;
                que_rev.push(a[i]);
            }
        }
    }

    vector<long long> dist(n, 1LL << 50);
    dist[0] = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (reach_fwd[a[j]] && reach_rev[a[j]] && reach_fwd[b[j]] && reach_rev[b[j]]
                    && dist[b[j]] > dist[a[j]] + c[j]) {
                dist[b[j]] = dist[a[j]] + c[j];
            }
        }
    }

    bool flag = true;
    for (int i = 0; i < m; i++) {
        if (reach_fwd[a[i]] && reach_rev[a[i]] && reach_fwd[b[i]] && reach_rev[b[i]]
                && dist[b[i]] > dist[a[i]] + c[i]) {
            flag = false;
        }
    }

    if (flag) {
        cout << (dist[n - 1] < 0 ? -dist[n - 1] : 0) << endl;
    } else {
        cout << -1 << endl;
    }
}
```
