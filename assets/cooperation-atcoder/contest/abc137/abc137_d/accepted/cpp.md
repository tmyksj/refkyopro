# AtCoder Beginner Contest 137
## D - Summer Vacation
```cpp
#include <algorithm>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<pair<int, int>> ab(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> ab[i].first >> ab[i].second;
    }

    sort(ab.begin(), ab.end());

    long long sum = 0;
    priority_queue<int> que;
    for (int i = m - 1, idx = 0; i >= 0; i--) {
        for (; idx < n && ab[idx].first <= m - i; idx++) {
            que.push(ab[idx].second);
        }

        if (que.empty()) {
            continue;
        }

        sum += que.top();
        que.pop();
    }

    cout << sum << endl;
}
```
