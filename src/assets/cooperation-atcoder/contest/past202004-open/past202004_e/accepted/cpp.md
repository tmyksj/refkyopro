# 第二回 アルゴリズム実技検定
## E - 順列
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> res(n, -1);
    for (int i = 0; i < n; i++) {
        if (res[i] < 0) {
            int c = 1;
            for (int j = a[i] - 1; j != i; j = a[j] - 1) {
                res[j] = i;
                c++;
            }

            res[i] = c;
            for (int j = a[i] - 1; j != i; j = a[j] - 1) {
                res[j] = c;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << res[i];
    }
    cout << endl;
}
```
