# AtCoder Grand Contest 030
## A - Poisonous Cookies
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << min(a + b + 1, c) + b << endl;
}
```
