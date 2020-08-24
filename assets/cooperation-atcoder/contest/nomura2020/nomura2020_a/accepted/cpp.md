# NOMURA プログラミングコンテスト 2020
## A - Study Scheduling
```cpp
#include <iostream>

using namespace std;

int main() {
    int h1, m1, h2, m2, k;
    cin >> h1 >> m1 >> h2 >> m2 >> k;
    cout << (60 * h2 + m2) - (60 * h1 + m1) - k << endl;
}
```
