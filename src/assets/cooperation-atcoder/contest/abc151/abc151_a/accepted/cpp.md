# AtCoder Beginner Contest 151
## A - Next Alphabet
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s = "abcdefghijklmnopqrstuvwxyz";
    string c;
    cin >> c;
    cout << s[c[0] + 1 - 'a'] << endl;
}
```
