# AtCoder Beginner Contest 097
## B - Exponential
```cpp
#include <iostream>

using namespace std;

int main() {
    int x;
    cin >> x;

    int res = 1;
    for (int i = 2; i <= x; i++) {
        for (int j = i * i; j <= x; j *= i) {
            if (res < j) {
                res = j;
            }
        }
    }

    cout << res << endl;
}
```
