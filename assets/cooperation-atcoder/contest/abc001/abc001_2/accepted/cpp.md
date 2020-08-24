# AtCoder Beginner Contest 001
## B - 視程の通報
```cpp
#include <iostream>

using namespace std;

int main() {
    int m;
    cin >> m;

    if (m < 1000) {
        cout << "0" << m / 100 << endl;
    } else if (m <= 5000) {
        cout << m / 100 << endl;
    } else if (m <= 30000) {
        cout << m / 1000 + 50 << endl;
    } else if (m <= 70000) {
        cout << m / 5000 + 74 << endl;
    } else {
        cout << "89" << endl;
    }
}
```
