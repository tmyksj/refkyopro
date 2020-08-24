# AtCoder Beginner Contest 084
## B - Postal Code
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int a, b;
    string s;
    cin >> a >> b >> s;

    bool res = true;
    for (int i = 0; i < a + b + 1; i++) {
        if ((i == a && s[i] != '-') || (i != a && s[i] == '-')) {
            res = false;
        }
    }

    cout << (res == 1 ? "Yes" : "No") << endl;
}
```
