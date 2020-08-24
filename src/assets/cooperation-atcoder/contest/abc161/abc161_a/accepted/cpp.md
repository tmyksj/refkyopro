# AtCoder Beginner Contest 161
## A - ABC Swap
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int x, y, z;
    cin >> x >> y >> z;

    swap(x, y);
    swap(x, z);

    cout << x << " " << y << " " << z << endl;
}
```
