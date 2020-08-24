# AtCoder Beginner Contest 129
## A - Airplane
```cpp
#include <cmath>
#include <iostream>

using namespace std;

int main() {
    int p, q, r;
    cin >> p >> q >> r;
    cout << min(p + q, min(q + r, r + p)) << endl;
}
```
