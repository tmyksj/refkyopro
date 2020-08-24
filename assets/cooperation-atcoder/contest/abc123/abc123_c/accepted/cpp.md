# AtCoder Beginner Contest 123
## C - Five Transportations
```cpp
#include <cmath>
#include <iostream>

using namespace std;

int main() {
    long long n, a, b, c, d, e;
    cin >> n >> a >> b >> c >> d >> e;
    cout << (n - 1) / min(a, min(b, min(c, min(d, e)))) + 5 << endl;
}
```
