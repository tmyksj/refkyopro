# AtCoder Regular Contest 036
## B - 山のデータ
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    int res = 1;
    for (int s = 0, t = 0, u = 0; s < n - 1; s = u) {
        for (t = s; t < n - 1 && h[t] < h[t + 1]; t++) {
        }

        for (u = t; u < n - 1 && h[u] > h[u + 1]; u++) {
        }

        res = max(res, u - s + 1);
    }

    cout << res << endl;
}
```
