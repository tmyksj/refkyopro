# AtCoder Beginner Contest 072
## B - OddString
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if (i % 2 == 0) {
            cout << s[i];
        }
    }

    cout << endl;
}
```
