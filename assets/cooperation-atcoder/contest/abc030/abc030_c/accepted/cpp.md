# AtCoder Beginner Contest 030
## C - 飛行機乗り
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, x, y;
    cin >> n >> m >> x >> y;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> b(m);
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }

    int res = 0;
    for (int i = 0, j = 0; ; ) {
        for (; j < m && a[i] + x > b[j]; j++) {
        }

        if (a[i] + x > b[j]) {
            break;
        }

        res++;

        for (; i < n && b[j] + y > a[i]; i++) {
        }

        if (b[j] + y > a[i]) {
            break;
        }
    }

    cout << res << endl;
}
```
