# AtCoder Beginner Contest 131
## A - Security
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    cout << (s[0] == s[1] || s[1] == s[2] || s[2] == s[3] ? "Bad" : "Good") << endl;
}
```
