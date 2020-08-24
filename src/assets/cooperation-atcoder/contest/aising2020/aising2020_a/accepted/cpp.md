# エイシング プログラミング コンテスト 2020
## A - Number of Multiples
```cpp
#include <iostream>

using namespace std;

int main() {
    int l, r, d;
    cin >> l >> r >> d;
    cout << r / d - (l + d - 1) / d + 1 << endl;
}
```
