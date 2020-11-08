# AtCoder Regular Contest 025
## A - ゴールドラッシュ
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n = 7;

    vector<int> d(n);
    for (int i = 0; i < n; i++) {
        cin >> d[i];
    }

    vector<int> j(n);
    for (int i = 0; i < n; i++) {
        cin >> j[i];
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        res += max(d[i], j[i]);
    }

    cout << res << endl;
}
```
