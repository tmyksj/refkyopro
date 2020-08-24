# AtCoder Beginner Contest 175
## C - Walking Takahashi
```cpp
#include <algorithm>
#include <cstdlib>
#include <iostream>

using namespace std;

int main() {
    long long x, k, d;
    cin >> x >> k >> d;

    if ((k - min(k, abs(x) / d)) % 2 == 0) {
        cout << abs(x) - min(k, abs(x) / d) * d << endl;
    } else {
        cout << d - abs(x) + min(k, abs(x) / d) * d << endl;
    }
}
```
