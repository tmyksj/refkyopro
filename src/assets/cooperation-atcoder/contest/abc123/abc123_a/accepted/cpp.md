# AtCoder Beginner Contest 123
## A - Five Antennas
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c, d, e, k;
    cin >> a >> b >> c >> d >> e >> k;
    cout << (e - a <= k ? "Yay!" : ":(") << endl;
}
```
