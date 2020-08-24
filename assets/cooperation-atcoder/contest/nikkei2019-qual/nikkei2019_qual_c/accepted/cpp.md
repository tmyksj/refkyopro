# 全国統一プログラミング王決定戦予選
## C - Different Strokes
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n), b(n), c(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
        c[i] = a[i] + b[i];
    }

    sort(c.begin(), c.end(), greater<int>());

    long long res = 0;
    for (int i = 0; i < n; i++) {
        res -= b[i];
        if (i % 2 == 0) {
            res += c[i];
        }
    }

    cout << res << endl;
}
```
