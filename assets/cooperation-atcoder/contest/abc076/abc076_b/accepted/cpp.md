# AtCoder Beginner Contest 076
## B - Addition and Multiplication
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int res = 1;
    for (int i = 0; i < n; i++) {
        res = min(2 * res, res + k);
    }

    cout << res << endl;
}
```
