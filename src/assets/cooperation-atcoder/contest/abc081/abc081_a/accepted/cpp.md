# AtCoder Beginner Contest 081
## A - Placing Marbles
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int res = 0;
    if (s[0] == '1') { res++; }
    if (s[1] == '1') { res++; }
    if (s[2] == '1') { res++; }

    cout << res << endl;
}
```
