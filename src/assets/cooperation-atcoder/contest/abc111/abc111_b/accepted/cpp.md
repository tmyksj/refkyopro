# AtCoder Beginner Contest 111
## B - AtCoder Beginner Contest 111
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= 9; i++) {
        if (n <= 100 * i + 10 * i + i) {
            cout << 100 * i + 10 * i + i << endl;
            break;
        }
    }
}
```
