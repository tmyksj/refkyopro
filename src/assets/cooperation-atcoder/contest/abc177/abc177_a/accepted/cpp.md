# AtCoder Beginner Contest 177
## A - Don't be late
```cpp
#include <iostream>

using namespace std;

int main() {
    int d, t, s;
    cin >> d >> t >> s;
    cout << ((d + s - 1) / s <= t ? "Yes" : "No") << endl;
}
```
