# AtCoder Beginner Contest 081
## B - Shift only
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 32;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        int r = 0;
        for (int j = a; j % 2 == 0; j /= 2) {
            r++;
        }

        res = min(res, r);
    }

    cout << res << endl;
}
```
