# AtCoder Beginner Contest 134
## D - Preparing Boxes
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> mod0(n + 1, vector<int>(0));
    for (int i = 1; i <= n; i++) {
        for (int j = i; j <= n; j += i) {
            mod0[j].push_back(i);
        }
    }

    vector<int> a(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }

    vector<int> res(0);
    vector<int> cnt(n + 1, 0);
    for (int i = n; i >= 1; i--) {
        if (cnt[i] % 2 != a[i]) {
            res.push_back(i);

            for (int j = 0; j < static_cast<int>(mod0[i].size()); j++) {
                cnt[mod0[i][j]]++;
            }
        }
    }

    cout << res.size() << endl;
    for (int i = 0; i < static_cast<int>(res.size()); i++) {
        cout << (i == 0 ? "" : " ") << res[i];
    }
    if (res.size() > 0) {
        cout << endl;
    }
}
```
