# 第三回 アルゴリズム実技検定
## I - 行列操作
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<long long> r(n), c(n);
    for (int i = 0; i < n; i++) {
        r[i] = i;
        c[i] = i;
    }

    for (int i = 0, j = 0; i < q; i++) {
        int query;
        cin >> query;

        if ((query == 1 && j == 0) || (query == 2 && j == 1)) {
            int a, b;
            cin >> a >> b;
            swap(r[a - 1], r[b - 1]);
        } else if ((query == 1 && j == 1) || (query == 2 && j == 0)) {
            int a, b;
            cin >> a >> b;
            swap(c[a - 1], c[b - 1]);
        } else if (query == 3) {
            j = (j + 1) % 2;
        } else {
            int a, b;
            cin >> a >> b;
            cout << n * (j == 0 ? r[a - 1] : r[b - 1]) + (j == 0 ? c[b - 1] : c[a - 1]) << endl;
        }
    }
}
```
