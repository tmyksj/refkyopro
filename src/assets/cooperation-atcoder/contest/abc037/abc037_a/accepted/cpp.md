# AtCoder Beginner Contest 037
## A - 饅頭
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << c / min(a, b) << endl;
}
```
