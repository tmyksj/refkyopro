# AtCoder Beginner Contest 033
## A - 暗証番号
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string n;
    cin >> n;
    cout << (n[0] == n[1] && n[1] == n[2] && n[2] == n[3] ? "SAME" : "DIFFERENT") << endl;
}
```
