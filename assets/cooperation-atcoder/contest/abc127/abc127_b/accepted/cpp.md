# AtCoder Beginner Contest 127
## B - Algae
```cpp
#include <iostream>

using namespace std;

int main() {
    int r, d, x;
    cin >> r >> d >> x;

    for (int i = 0; i < 10; i++) {
        x = r * x - d;
        cout << x << endl;
    }
}
```
