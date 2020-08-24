# AtCoder Beginner Contest 021
## A - 足し算
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int r = 0;
    for (int i = 1; i <= n; i <<= 1) {
        if ((n & i) > 0) {
            r++;
        }
    }

    cout << r << endl;
    for (int i = 1; i <= n; i <<= 1) {
        if ((n & i) > 0) {
            cout << i << endl;
        }
    }
}
```
