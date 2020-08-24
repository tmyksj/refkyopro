# AtCoder Beginner Contest 030
## A - 勝率計算
```cpp
#include <iostream>

using namespace std;

int main() {
    double a, b, c, d;
    cin >> a >> b >> c >> d;
    cout << (b / a > d / c ? "TAKAHASHI" : (b / a == d / c ? "DRAW" : "AOKI")) << endl;
}
```
