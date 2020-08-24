# AtCoder Beginner Contest 012
## C - 九九足し算
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if ((i + 1) * (j + 1) + n == 2025) {
                cout << i + 1 << " x " << j + 1 << endl;
            }
        }
    }
}
```
