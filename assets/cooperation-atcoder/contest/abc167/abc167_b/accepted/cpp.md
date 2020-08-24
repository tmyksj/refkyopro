# AtCoder Beginner Contest 167
## B - Easy Linear Programming
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, c, k;
    cin >> a >> b >> c >> k;

    if (a + b >= k) {
        cout << min(a, k) << endl;
    } else {
        cout << 2 * a + b - k << endl;
    }
}
```
