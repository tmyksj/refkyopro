# AtCoder Grand Contest 036
## A - Triangle
```cpp
#include <iostream>

using namespace std;

int main() {
    long long s;
    cin >> s;

    long long x3 = (s % 1000000000 == 0 ? 0 : 1000000000 - s % 1000000000);
    long long y3 = (s + x3) / 1000000000;
    cout << "0 0 1000000000 1 " << x3 << " " << y3 << endl;
}
```
