# AtCoder Beginner Contest 073
## B - Theater
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int l, r;
        cin >> l >> r;
        res += r - l + 1;
    }

    cout << res << endl;
}
```
