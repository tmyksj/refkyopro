# DISCO presents ディスカバリーチャンネル コードコンテスト2020 予選
## B - Iron Bar Cutting
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    long long res = 1LL << 61;
    for (long long i = 0, l = a[0], r = accumulate(a.begin() + 1, a.end(), 0LL); i < n - 1; i++, l += a[i], r -= a[i]) {
        res = min(res, l > r ? l - r : r - l);
    }

    cout << res << endl;
}
```
