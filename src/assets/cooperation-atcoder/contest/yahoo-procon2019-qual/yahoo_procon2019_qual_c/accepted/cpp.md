# 「みんなのプロコン 2019」
## C - When I hit my pocket...
```cpp
#include <iostream>

using namespace std;

int main() {
    long long k, a, b;
    cin >> k >> a >> b;

    if (b - a > 2 && k - a + 1 >= 0) {
        cout << a + (b - a) * ((k - a + 1) / 2) + ((k - a + 1) % 2 == 1 ? 1 : 0) << endl;
    } else {
        cout << k + 1 << endl;
    }
}
```
