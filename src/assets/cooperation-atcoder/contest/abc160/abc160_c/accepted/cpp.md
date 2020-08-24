# AtCoder Beginner Contest 160
## C - Traveling Salesman around Lake
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int k, n;
    cin >> k >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int res = a[n - 1] - a[0];
    for (int i = 1; i < n; i++) {
        res = min(res, k - a[i] + a[i - 1]);
    }

    cout << res << endl;
}
```
