# AtCoder Beginner Contest 131
## E - Friendships
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    if (k <= (n - 1) * (n - 2) / 2) {
        int m = n - 1 + (n - 1) * (n - 2) / 2 - k;

        cout << m << endl;
        for (int i = 0, cnt = 0; i < n; i++) {
            for (int j = i + 1; cnt < m && j < n; cnt++, j++) {
                cout << i + 1 << " " << j + 1 << endl;
            }
        }
    } else {
        cout << "-1" << endl;
    }
}
```
