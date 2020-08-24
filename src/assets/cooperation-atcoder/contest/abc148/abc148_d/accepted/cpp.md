# AtCoder Beginner Contest 148
## D - Brick Break
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = n;
    for (int i = 0, j = 1; i < n; i++) {
        int a;
        cin >> a;

        if (a == j) {
            res--;
            j++;
        }
    }

    cout << (res < n ? res : -1) << endl;
}
```
