# 第二回 アルゴリズム実技検定
## I - トーナメント
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(1 << n);
    for (int i = 0; i < (1 << n); i++) {
        cin >> a[i];
    }

    vector<int> res(1 << n, 1);

    vector<int> b(1 << n);
    for (int i = 0; i < (1 << n); i++) {
        b[i] = i;
    }

    while (b.size() > 2) {
        vector<int> c(b.size() / 2);
        for (int i = 0; i < static_cast<int>(c.size()); i++) {
            if (a[b[2 * i]] > a[b[2 * i + 1]]) {
                c[i] = b[2 * i];
                res[b[2 * i]]++;
            } else {
                c[i] = b[2 * i + 1];
                res[b[2 * i + 1]]++;
            }
        }

        b = c;
    }

    for (int i = 0; i < (1 << n); i++) {
        cout << res[i] << endl;
    }
}
```
