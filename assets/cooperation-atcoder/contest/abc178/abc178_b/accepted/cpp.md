# AtCoder Beginner Contest 178
## B - Product Max
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long a, b, c, d;
    cin >> a >> b >> c >> d;

    if ((a < 0 && 0 < b) || (c < 0 && 0 < d)) {
        cout << max({ a * c, a * d, b * c, b * d, 0LL }) << endl;
    } else {
        cout << max({ a * c, a * d, b * c, b * d }) << endl;
    }
}
```
