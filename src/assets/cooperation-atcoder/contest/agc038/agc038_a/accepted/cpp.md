# AtCoder Grand Contest 038
## A - 01 Matrix
```cpp
#include <iostream>

using namespace std;

int main() {
    int h, w, a, b;
    cin >> h >> w >> a >> b;

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cout << ((i < b && j < a) != (b <= i && a <= j) ? "0" : "1");
        }
        cout << endl;
    }
}
```
