# AtCoder Beginner Contest 052
## A - Two Rectangles
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;
    cout << max(a * b, c * d) << endl;
}
```
