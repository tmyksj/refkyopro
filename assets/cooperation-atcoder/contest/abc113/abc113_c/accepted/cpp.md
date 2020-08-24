# AtCoder Beginner Contest 113
## C - ID
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<int>> pref(n, vector<int>(0));
    vector<pair<int, int>> city(m, make_pair(0, 0));
    for (int i = 0; i < m; i++) {
        cin >> city[i].first >> city[i].second;
        pref[city[i].first - 1].push_back(city[i].second);
    }

    for (int i = 0; i < n; i++) {
        sort(pref[i].begin(), pref[i].end());
    }

    for (int i = 0; i < m; i++) {
        cout << setw(6)
            << setfill('0')
            << city[i].first
            << setw(6)
            << setfill('0')
            << (lower_bound(pref[city[i].first - 1].begin(), pref[city[i].first - 1].end(), city[i].second)
                - pref[city[i].first - 1].begin()
                + 1)
            << endl;
    }
}
```
