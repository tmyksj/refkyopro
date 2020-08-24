# AtCoder Regular Contest 056
## A - みんなでワイワイみかん
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long a, b, k, l;
    cin >> a >> b >> k >> l;
    cout << min({ a * k, a * (k % l) + b * (k / l), b * (k / l + 1) }) << endl;
}
```
