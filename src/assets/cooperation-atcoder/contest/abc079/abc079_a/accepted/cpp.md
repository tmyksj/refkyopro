# AtCoder Beginner Contest 079
## A - Good Integer
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string n;
    cin >> n;
    cout << ((n[0] == n[1] && n[1] == n[2] && n[2] == n[3])
            || (n[0] == n[1] && n[1] == n[2] && n[2] != n[3])
            || (n[0] != n[1] && n[1] == n[2] && n[2] == n[3]) ? "Yes" : "No") << endl;
}
```
