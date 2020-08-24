# AtCoder Beginner Contest 018
## A - 豆まき
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << (a < b ? 1 : 0) + (a < c ? 1 : 0) + 1 << endl;
    cout << (b < a ? 1 : 0) + (b < c ? 1 : 0) + 1 << endl;
    cout << (c < a ? 1 : 0) + (c < b ? 1 : 0) + 1 << endl;
}
```
