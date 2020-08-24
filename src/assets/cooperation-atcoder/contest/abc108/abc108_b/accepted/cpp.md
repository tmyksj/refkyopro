# AtCoder Beginner Contest 108
## B - Ruined Square
```cpp
#include <iostream>

using namespace std;

int main() {
    int x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    cout << x2 + y1 - y2
        << " " << y2 + x2 - x1
        << " " << x1 + y1 - y2
        << " " << y1 + x2 - x1
        << endl;
}
```
