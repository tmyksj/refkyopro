# 第三回 アルゴリズム実技検定
## K - コンテナの移動
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        a[i] = i;
        b[i] = -1;
    }

    for (int i = 0; i < q; i++) {
        int f, t, x;
        cin >> f >> t >> x;

        int af = a[f - 1], at = a[t - 1];
        a[f - 1] = b[x - 1];
        a[t - 1] = af;
        b[x - 1] = at;
    }

    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        for (int j = a[i]; j != -1; j = b[j]) {
            res[j] = i;
        }
    }

    for (int i = 0; i < n; i++) {
        cout << res[i] + 1 << endl;
    }
}
```
