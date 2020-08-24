# AtCoder Beginner Contest 031
## A - ゲーム
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, d;
    cin >> a >> d;
    cout << max((a + 1) * d, a * (d + 1)) << endl;
}
```
