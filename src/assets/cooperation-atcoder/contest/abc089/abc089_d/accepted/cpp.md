# AtCoder Beginner Contest 089
## D - Practical Skill Test
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int h, w, d;
    cin >> h >> w >> d;

    vector<vector<int>> a(h, vector<int>(w));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cin >> a[i][j];
        }
    }

    vector<pair<int, int>> a2yx(h * w + 1);
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            a2yx[a[i][j]] = make_pair(i, j);
        }
    }

    vector<int> a2pw(h * w + 1, 0);
    for (int i = h * w - d; i >= 0; i--) {
        a2pw[i] = a2pw[i + d]
                + abs(a2yx[i].first - a2yx[i + d].first)
                + abs(a2yx[i].second - a2yx[i + d].second);
    }

    int q;
    cin >> q;

    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        cout << a2pw[l] - a2pw[r] << endl;
    }
}
```
