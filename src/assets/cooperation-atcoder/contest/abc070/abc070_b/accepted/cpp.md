# AtCoder Beginner Contest 070
## B - Two Switches
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    cout << max(0, min(b, d) - max(a, c)) << endl;
}
```
