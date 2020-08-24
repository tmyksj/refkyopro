# AtCoder Beginner Contest 116
## D - Various Sushi
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<pair<int, int>> dt(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> dt[i].second >> dt[i].first;
    }

    sort(dt.begin(), dt.end(), greater<pair<int, int>>());

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> que_used;
    priority_queue<int, vector<int>, less<int>> que_unused;

    vector<int> cnt_used(n + 1, 0);
    long long base = 0, type = 0;

    for (int i = 0; i < n; i++) {
        if (i < k) {
            que_used.push(dt[i]);
            cnt_used[dt[i].second]++;

            base += dt[i].first;
            if (cnt_used[dt[i].second] == 1) {
                type++;
            }
        } else if (cnt_used[dt[i].second] == 0) {
            que_unused.push(dt[i].first);
            cnt_used[dt[i].second]++;
        }
    }

    long long res = base + type * type;

    while (!que_used.empty() && !que_unused.empty()) {
        pair<int, int> pick_out = que_used.top();
        que_used.pop();

        while (!que_used.empty() && cnt_used[pick_out.second] == 1) {
            pick_out = que_used.top();
            que_used.pop();
        }

        if (cnt_used[pick_out.second] == 1) {
            break;
        }

        cnt_used[pick_out.second]--;

        int pick_in = que_unused.top();
        que_unused.pop();

        base = base - pick_out.first + pick_in;
        type++;

        if (res < base + type * type) {
            res = base + type * type;
        }
    }

    cout << res << endl;
}
```
