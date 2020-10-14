# AtCoder Regular Contest 039
## A - A - B problem
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << max({ a - b + 100 * (9 - a / 100),
            a - b + 10 * (9 - a / 10 % 10),
            a - b + 9 - a % 10,
            a - b + 100 * (b / 100 - 1),
            a - b + 10 * (b / 10 % 10),
            a - b + b % 10 }) << endl;
}
```
