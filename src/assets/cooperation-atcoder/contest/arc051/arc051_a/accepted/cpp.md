# AtCoder Regular Contest 051
## A - 塗り絵
```cpp
#include <iostream>

using namespace std;

int main() {
    int x1, y1, r, x2, y2, x3, y3;
    cin >> x1 >> y1 >> r >> x2 >> y2 >> x3 >> y3;

    cout << (x2 <= x1 - r && x1 + r <= x3
            && y2 <= y1 - r && y1 + r <= y3 ? "NO" : "YES") << endl;
    cout << ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) <= r * r
            && (x1 - x2) * (x1 - x2) + (y1 - y3) * (y1 - y3) <= r * r
            && (x1 - x3) * (x1 - x3) + (y1 - y2) * (y1 - y2) <= r * r
            && (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3) <= r * r ? "NO" : "YES") << endl;
}
```
