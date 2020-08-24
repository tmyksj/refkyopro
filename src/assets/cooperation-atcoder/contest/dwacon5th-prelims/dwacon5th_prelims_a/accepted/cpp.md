# 第5回 ドワンゴからの挑戦状 予選
## A - Thumbnail
```cpp
#include <cmath>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int a_sum = accumulate(a.begin(), a.end(), 0);

    int res = 0;
    for (int i = 1; i < n; i++) {
        if (abs(n * a[res] - a_sum) > abs(n * a[i] - a_sum)) {
            res = i;
        }
    }

    cout << res << endl;
}
```
