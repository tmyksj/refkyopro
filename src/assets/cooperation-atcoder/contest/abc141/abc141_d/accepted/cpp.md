# AtCoder Beginner Contest 141
## D - Powerful Discount Tickets
```cpp
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    priority_queue<pair<long long, pair<long long, long long>>> que;
    for (int i = 0; i < n; i++) {
        que.push(make_pair(a[i], make_pair(a[i], 1)));
    }

    for (int i = 0; i < m; i++) {
        pair<long long, pair<long long, long long>> p = que.top();
        que.pop();

        if (p.first == 0) {
            break;
        }

        que.push(make_pair(p.second.first / (2 * p.second.second), make_pair(p.second.first, 2 * p.second.second)));
    }

    long long res = 0;
    while (!que.empty()) {
        pair<long long, pair<long long, long long>> p = que.top();
        que.pop();
        res += p.first;
    }

    cout << res << endl;
}
```
