# AtCoder Beginner Contest 056
## B - NarrowRectanglesEasy
```cpp
#include <iostream>

using namespace std;

int main() {
    int w, a, b;
    cin >> w >> a >> b;

    int ab_abs = a > b ? a - b : b - a;
    cout << (ab_abs <= w ? 0 : ab_abs - w) << endl;
}
```
