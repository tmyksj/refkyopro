# AtCoder Beginner Contest 064
## A - RGB Cards
```cpp
#include <iostream>

using namespace std;

int main() {
    int r, g, b;
    cin >> r >> g >> b;
    cout << ((100 * r + 10 * g + b) % 4 == 0 ? "YES" : "NO") << endl;
}
```
