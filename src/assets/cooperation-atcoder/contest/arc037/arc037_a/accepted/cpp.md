# AtCoder Regular Contest 037
## A - 全優
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int m;
        cin >> m;
        res += max(0, 80 - m);
    }

    cout << res << endl;
}
```
