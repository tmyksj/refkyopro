# AtCoder Beginner Contest 006
## D - トランプ挿入ソート
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    int res = n - 1;
    vector<int> r(n, 1);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (c[i] > c[j]) {
                r[i] = max(r[i], r[j] + 1);
            }
        }
        res = min(res, n - r[i]);
    }

    cout << res << endl;
}
```
