# AtCoder Beginner Contest 095
## A - Something on It
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    cout << 700 + (s[0] == 'o' ? 100 : 0) + (s[1] == 'o' ? 100 : 0) + (s[2] == 'o' ? 100 : 0) << endl;
}
```
