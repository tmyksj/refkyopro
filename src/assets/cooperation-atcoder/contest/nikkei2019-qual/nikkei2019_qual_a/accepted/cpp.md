# 全国統一プログラミング王決定戦予選
## A - Subscribers
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;
    cout << min(a, b) << " " << max(a + b - n, 0) << endl;
}
```
