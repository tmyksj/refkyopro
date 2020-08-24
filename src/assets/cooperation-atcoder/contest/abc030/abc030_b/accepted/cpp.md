# AtCoder Beginner Contest 030
## B - 時計盤
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    double s = 30 * (n % 12) + 0.5 * m;
    double l = 6 * m;

    cout << min(max(s, l) - min(s, l), min(s, l) - max(s, l) + 360) << endl;
}
```
