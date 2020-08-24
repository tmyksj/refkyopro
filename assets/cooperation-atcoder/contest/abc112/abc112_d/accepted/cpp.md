# AtCoder Beginner Contest 112
## D - Partition
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int r = 1;
    for (int i = 1; i * i <= m; i++) {
        if (m % i == 0) {
            if (i <= m / n) {
                r = i;
            }

            if (m / i <= m / n) {
                r = m / i;
                break;
            }
        }
    }

    cout << r << endl;
}
```
