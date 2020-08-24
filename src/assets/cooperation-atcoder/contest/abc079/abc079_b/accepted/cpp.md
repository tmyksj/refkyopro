# AtCoder Beginner Contest 079
## B - Lucas Number
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long l0 = 2, l1 = 1;
    for (int i = 0; i < n - 1; i++) {
        long long w = l0 + l1;
        l0 = l1;
        l1 = w;
    }

    cout << l1 << endl;
}
```
