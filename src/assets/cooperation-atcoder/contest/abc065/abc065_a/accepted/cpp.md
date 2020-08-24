# AtCoder Beginner Contest 065
## A - Expired?
```cpp
#include <iostream>

using namespace std;

int main() {
    int x, a, b;
    cin >> x >> a >> b;

    if (b - a <= 0) {
        cout << "delicious" << endl;
    } else if (b - a <= x) {
        cout << "safe" << endl;
    } else {
        cout << "dangerous" << endl;
    }
}
```
