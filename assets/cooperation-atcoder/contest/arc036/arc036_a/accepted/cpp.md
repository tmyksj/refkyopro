# AtCoder Regular Contest 036
## A - ぐっすり
```cpp
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> t[i];
    }

    int res = -1;
    for (int i = 0; i < n - 2; i++) {
        if (accumulate(t.begin() + i, t.begin() + i + 3, 0) < k) {
            res = i + 3;
            break;
        }
    }

    cout << res << endl;
}
```
