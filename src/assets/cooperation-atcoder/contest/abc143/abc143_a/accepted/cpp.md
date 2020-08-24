# AtCoder Beginner Contest 143
## A - Curtain
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << max(0, a - 2 * b) << endl;
}
```
