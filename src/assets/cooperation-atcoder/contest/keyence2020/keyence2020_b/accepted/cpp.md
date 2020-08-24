# キーエンス プログラミング コンテスト 2020
## B - Robot Arms
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> rl(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        int x, l;
        cin >> x >> l;
        rl[i].first = x + l;
        rl[i].second = x - l;
    }

    sort(rl.begin(), rl.end());

    int res = 1;
    for (int i = 1, j = rl[0].first; i < n; i++) {
        if (j <= rl[i].second) {
            j = rl[i].first;
            res++;
        }
    }

    cout << res << endl;
}
```
