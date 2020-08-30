# AtCoder Beginner Contest 176
## E - Bomber
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, w, m;
    cin >> h >> w >> m;

    vector<int> hi(m), wi(m);
    for (int i = 0; i < m; i++) {
        cin >> hi[i] >> wi[i];
    }

    vector<vector<int>> hw(h, vector<int>(0));
    for (int i = 0; i < m; i++) {
        hw[hi[i] - 1].push_back(wi[i] - 1);
    }

    for (int i = 0; i < h; i++) {
        sort(hw[i].begin(), hw[i].end());
    }

    vector<pair<int, int>> wh(w, make_pair(0, 0));
    for (int i = 0; i < m; i++) {
        wh[wi[i] - 1].first++;
    }

    for (int i = 0; i < w; i++) {
        wh[i].second = i;
    }

    sort(wh.begin(), wh.end(), greater<pair<int, int>>());

    int res = 0;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w && wh[0].first - wh[j].first <= 1; j++) {
            vector<int>::iterator k = lower_bound(hw[i].begin(), hw[i].end(), wh[j].second);
            if (k == hw[i].end() || *k != wh[j].second) {
                res = max(res, static_cast<int>(hw[i].size()) + wh[j].first);
                break;
            } else {
                res = max(res, static_cast<int>(hw[i].size()) + wh[j].first - 1);
            }
        }
    }

    cout << res << endl;
}
```
