# AtCoder Beginner Contest 110
## A - Maximize the Formula
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max(10 * a + b + c, max(a + 10 * b + c, a + b + 10 * c)) << endl;
}
```
