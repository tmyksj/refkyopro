# AtCoder Beginner Contest 160
## A - Coffee
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    cout << (s[2] == s[3] && s[4] == s[5] ? "Yes" : "No") << endl;
}
```
