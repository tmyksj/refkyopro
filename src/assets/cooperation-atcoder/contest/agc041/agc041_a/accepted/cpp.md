# AtCoder Grand Contest 041
## A - Table Tennis Training
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n, a, b;
    cin >> n >> a >> b;

    if ((b - a) % 2 == 0) {
        cout << (b - a) / 2 << endl;
    } else {
        cout << min(a + (b - a - 1) / 2, n - b + 1 + (n - a - (n - b + 1)) / 2) << endl;
    }
}
```
