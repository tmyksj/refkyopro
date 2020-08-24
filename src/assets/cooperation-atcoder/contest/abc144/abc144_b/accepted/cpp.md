# AtCoder Beginner Contest 144
## B - 81
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    bool res = false;
    for (int i = 1; i <= 9; i++) {
        for (int j = 1; j <= 9; j++) {
            if (i * j == n) {
                res = true;
            }
        }
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
