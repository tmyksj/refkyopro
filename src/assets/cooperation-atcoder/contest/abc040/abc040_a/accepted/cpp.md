# AtCoder Beginner Contest 040
## A - 赤赤赤赤青
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    cout << min(x - 1, n - x) << endl;
}
```
