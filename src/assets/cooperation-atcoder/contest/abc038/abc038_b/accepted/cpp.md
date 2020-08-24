# AtCoder Beginner Contest 038
## B - ディスプレイ
```cpp
#include <iostream>

using namespace std;

int main() {
    int h1, w1, h2, w2;
    cin >> h1 >> w1 >> h2 >> w2;
    cout << (h1 == h2 || h1 == w2 || w1 == h2 || w1 == w2 ? "YES" : "NO") << endl;
}
```
