# AtCoder Regular Contest 023
## A - 経過日数
```cpp
#include <iostream>

using namespace std;

int main() {
    int y, m, d;
    cin >> y >> m >> d;
    cout << 735369 - (m <= 2
            ? 365 * (y - 1) + (y - 1) / 4 - (y - 1) / 100 + (y - 1) / 400 + 306 * (m + 13) / 10 + d - 429
            : 365 * y + y / 4 - y / 100 + y / 400 + 306 * (m + 1) / 10 + d - 429) << endl;
}
```
