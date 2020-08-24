# AtCoder Beginner Contest 058
## B - ∵∴∵
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string o, e;
    cin >> o >> e;

    for (int i = 0; i < static_cast<int>(o.size()); i++) {
        cout << o[i];
        if (i < static_cast<int>(e.size())) {
            cout << e[i];
        }
    }
    cout << endl;
}
```
