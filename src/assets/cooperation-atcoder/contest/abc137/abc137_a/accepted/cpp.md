# AtCoder Beginner Contest 137
## A - +-x
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << max(a + b, max(a - b, a * b)) << endl;
}
```
