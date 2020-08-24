# パナソニックプログラミングコンテスト2020
## C - Sqrt Inequality
```cpp
#include <iostream>

using namespace std;

int main() {
    long long a, b, c;
    cin >> a >> b >> c;
    cout << (c - a - b > 0 && (c - a - b) * (c - a - b) - 4 * a * b > 0 ? "Yes" : "No") << endl;
}
```
