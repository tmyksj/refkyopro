# AtCoder Beginner Contest 078
## A - HEX
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string x, y;
    cin >> x >> y;
    cout << (x < y ? "<" : (x == y ? "=" : ">")) << endl;
}
```
