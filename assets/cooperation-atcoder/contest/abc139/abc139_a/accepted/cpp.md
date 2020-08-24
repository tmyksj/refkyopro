# AtCoder Beginner Contest 139
## A - Tenki
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;
    cout << (s[0] == t[0] ? 1 : 0) + (s[1] == t[1] ? 1 : 0) + (s[2] == t[2] ? 1 : 0) << endl;
}
```
