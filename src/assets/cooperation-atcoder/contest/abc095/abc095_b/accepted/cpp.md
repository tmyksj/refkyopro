# AtCoder Beginner Contest 095
## B - Bitter Alchemy
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, x;
    cin >> n >> x;

    int m_min = 1000;
    for (int i = 0; i < n; i++) {
        int m;
        cin >> m;

        x -= m;
        if (m_min > m) {
            m_min = m;
        }
    }

    cout << n + x / m_min << endl;
}
```
