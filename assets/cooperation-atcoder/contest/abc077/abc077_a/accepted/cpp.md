# AtCoder Beginner Contest 077
## A - Rotation
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string c0, c1;
    cin >> c0 >> c1;
    cout << (c0[0] == c1[2] && c0[1] == c1[1] && c0[2] == c1[0] ? "YES" : "NO") << endl;
}
```
