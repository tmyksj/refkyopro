# AtCoder Regular Contest 024
## B - 赤と黒の木
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    int res = -1;
    for (int i = 1, j = 1; i < 2 * n; i = j) {
        if (c[(i - 1) % n] != c[i % n]) {
            while (j < 2 * n && c[i % n] == c[j % n]) {
                j++;
            }

            res = max(res, (j - i - 1) / 2 + 1);
        } else {
            j++;
        }
    }

    cout << res << endl;
}
```
