# AtCoder Beginner Contest 004
## B - 回転
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    vector<string> c(16);
    for (int i = 0; i < 16; i++) {
        cin >> c[i];
    }

    for (int i = 0; i < 16; i++) {
        cout << c[15 - i];

        if (i % 4 == 3) {
            cout << endl;
        } else {
            cout << " ";
        }
    }
}
```
