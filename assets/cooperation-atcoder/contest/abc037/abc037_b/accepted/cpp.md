# AtCoder Beginner Contest 037
## B - 編集
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> a(n, 0);
    for (int i = 0; i < q; i++) {
        int l, r, t;
        cin >> l >> r >> t;

        for (int j = l - 1; j <= r - 1; j++) {
            a[j] = t;
        }
    }

    for (int i = 0; i < n; i++) {
        cout << a[i] << endl;
    }
}
```
