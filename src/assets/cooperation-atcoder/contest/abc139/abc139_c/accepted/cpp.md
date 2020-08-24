# AtCoder Beginner Contest 139
## C - Lower
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    int res = 0;
    for (int i = 0, r = 0; i < n - 1; i++) {
        if (h[i] >= h[i + 1]) {
            r++;
        } else {
            r = 0;
        }

        if (res < r) {
            res = r;
        }
    }

    cout << res << endl;
}
```
