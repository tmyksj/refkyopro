# AtCoder Beginner Contest 105
## B - Cakes and Donuts
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    bool exists = false;
    for (int i = 0; 4 * i <= n; i++) {
        if ((n - 4 * i) % 7 == 0) {
            exists = true;
        }
    }

    cout << (exists ? "Yes" : "No") << endl;
}
```
