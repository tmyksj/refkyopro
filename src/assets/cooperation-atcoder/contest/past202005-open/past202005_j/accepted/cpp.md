# 第三回 アルゴリズム実技検定
## J - 回転寿司
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <iterator>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i];
    }

    vector<int> b(n, 0);
    for (int i = 0; i < m; i++) {
        vector<int>::iterator j = upper_bound(b.begin(), b.end(), a[i], greater<int>());
        if (j == b.end()) {
            cout << "-1" << endl;
        } else {
            *j = a[i];
            cout << distance(b.begin(), j) + 1 << endl;
        }
    }
}
```
