# AtCoder Beginner Contest 038
## D - プレゼント
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

bool comp(pair<int, int>& p, pair<int, int>& q) {
    return p.first != q.first ? p.first < q.first : p.second > q.second;
}

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> hw(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> hw[i].first >> hw[i].second;
    }

    sort(hw.begin(), hw.end(), comp);

    int inf = 1000000000;
    vector<int> dp(n, inf);
    for (int i = 0; i < n; i++) {
        *lower_bound(dp.begin(), dp.end(), hw[i].second) = hw[i].second;
    }

    cout << lower_bound(dp.begin(), dp.end(), inf) - dp.begin() << endl;
}
```
