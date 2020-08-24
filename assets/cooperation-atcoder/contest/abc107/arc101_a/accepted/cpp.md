# AtCoder Beginner Contest 107
## C - Candles
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    int res = 2000000000;
    for (int i = 0; i + k - 1 < n; i++) {
        res = min(res, x[i + k - 1] - x[i] + min(abs(x[i + k - 1]), abs(x[i])));
    }

    cout << res << endl;
}
```
