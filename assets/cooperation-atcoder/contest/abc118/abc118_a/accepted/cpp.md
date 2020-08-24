# AtCoder Beginner Contest 118
## A - B +/- A
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << (b % a == 0 ? a + b : b - a) << endl;
}
```
