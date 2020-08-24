# AtCoder Beginner Contest 170
## B - Crane and Turtle
```cpp
#include <iostream>

using namespace std;

int main() {
    int x, y;
    cin >> x >> y;

    bool res = false;
    for (int i = 0; i <= x; i++) {
        res = res || 2 * i + 4 * (x - i) == y;
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
