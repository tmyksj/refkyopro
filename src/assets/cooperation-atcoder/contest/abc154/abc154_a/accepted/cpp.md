# AtCoder Beginner Contest 154
## A - Remaining Balls
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t, u;
    int a, b;
    cin >> s >> t >> a >> b >> u;

    if (u == s) {
        cout << a - 1 << " " << b << endl;
    } else {
        cout << a << " " << b - 1 << endl;
    }
}
```
