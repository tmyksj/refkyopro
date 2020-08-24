# AtCoder Beginner Contest 130
## C - Rectangle Cutting
```cpp
#include <iostream>

using namespace std;

int main() {
    long long w, h, x, y;
    cin >> w >> h >> x >> y;
    cout << w * h / 2.0 << " " << (x == w / 2.0 && y == h / 2.0 ? 1 : 0) << endl;
}
```
