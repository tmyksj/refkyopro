# AtCoder Regular Contest 048
## A - 階段の下
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << (a < 0 && 0 < b ? b - a - 1 : b - a) << endl;
}
```
