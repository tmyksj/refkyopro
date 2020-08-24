# AtCoder Beginner Contest 101
## A - Eating Symbols Easy
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    cout << (s[0] == '+' ? 1 : -1)
        + (s[1] == '+' ? 1 : -1)
        + (s[2] == '+' ? 1 : -1)
        + (s[3] == '+' ? 1 : -1) << endl;
}
```
