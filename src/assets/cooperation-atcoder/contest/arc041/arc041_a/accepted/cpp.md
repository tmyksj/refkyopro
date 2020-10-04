# AtCoder Regular Contest 041
## A - コインの反転
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int x, y, k;
    cin >> x >> y >> k;
    cout << x + min(y, k) - max(k - y, 0) << endl;
}
```
