# AtCoder Regular Contest 046
## A - ゾロ目数
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < (n - 1) / 9 + 1; i++) {
        cout << (n - 1) % 9 + 1;
    }
    cout << endl;
}
```
