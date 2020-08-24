# AtCoder Beginner Contest 176
## B - Multiple of 9
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string n;
    cin >> n;

    int s = 0;
    for (int i = 0; i < static_cast<int>(n.size()); i++) {
        s += n[i] - '0';
    }

    cout << (s % 9 == 0 ? "Yes" : "No") << endl;
}
```
