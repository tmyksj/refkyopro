# AtCoder Regular Contest 048
## B - AtCoderでじゃんけんを
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> r(n), h(n);
    for (int i = 0; i < n; i++) {
        cin >> r[i] >> h[i];
    }

    vector<vector<pair<int, int>>> v(*max_element(r.begin(), r.end()) + 1, vector<pair<int, int>>(0));
    for (int i = 0; i < n; i++) {
        v[r[i]].push_back(make_pair(i, h[i] - 1));
    }

    vector<vector<int>> res(n, vector<int>(3, 0));
    for (int i = 0, j = 0; i < static_cast<int>(v.size()); i++, j += v[i - 1].size()) {
        vector<int> c(3, 0);
        for (int k = 0; k < static_cast<int>(v[i].size()); k++) {
            c[v[i][k].second]++;
        }

        for (int k = 0; k < static_cast<int>(v[i].size()); k++) {
            res[v[i][k].first][0] = j + c[(v[i][k].second + 1) % 3];
            res[v[i][k].first][1] = n - j - v[i].size() + c[(v[i][k].second + 2) % 3];
            res[v[i][k].first][2] = c[v[i][k].second] - 1;
        }
    }

    for (int i = 0; i < n; i++) {
        cout << res[i][0] << " " << res[i][1] << " " << res[i][2] << endl;
    }
}
```
