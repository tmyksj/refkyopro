# AtCoder Beginner Contest 024
## B - 自動ドア
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, t;
    cin >> n >> t;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int res = t;
    for (int i = 1; i < n; i++) {
        res += min(t, a[i] - a[i - 1]);
    }

    cout << res << endl;
}
```
