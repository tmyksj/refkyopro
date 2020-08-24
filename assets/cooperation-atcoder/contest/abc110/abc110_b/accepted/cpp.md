# AtCoder Beginner Contest 110
## B - 1 Dimensional World's Tale
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, x, y;
    cin >> n >> m >> x >> y;

    int xr = x;
    for (int i = 0; i < n; i++) {
        int xi;
        cin >> xi;

        if (xr < xi) {
            xr = xi;
        }
    }

    int yl = y;
    for (int i = 0; i < m; i++) {
        int yi;
        cin >> yi;

        if (yl > yi) {
            yl = yi;
        }
    }

    cout << (xr < yl ? "No War" : "War") << endl;
}
```
