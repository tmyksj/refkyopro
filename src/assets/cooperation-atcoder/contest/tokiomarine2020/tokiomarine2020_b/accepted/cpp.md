# 東京海上日動 プログラミングコンテスト2020
## B - Tag
```cpp
#include <iostream>

using namespace std;

int main() {
    long long a, v, b, w, t;
    cin >> a >> v >> b >> w >> t;
    cout << ((a <= b && a + v * t >= b + w * t) || (a > b && a - v * t <= b - w * t) ? "YES" : "NO") << endl;
}
```
