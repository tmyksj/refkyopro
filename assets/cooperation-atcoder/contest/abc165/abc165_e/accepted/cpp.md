# AtCoder Beginner Contest 165
## E - Rotation Matching
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    for (int i = 0; i < m / 2; i++) {
        cout << i + 1 << " " << m - i + (m + 1) % 2 << endl;
    }
    for (int i = 0; i < m / 2 + m % 2; i++) {
        cout << i + m + (m + 1) % 2 + 1 << " " << 2 * m - i + 1 << endl;
    }
}
```
