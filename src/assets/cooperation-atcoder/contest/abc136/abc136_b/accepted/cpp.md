# AtCoder Beginner Contest 136
## B - Uneven Numbers
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int cnt = 0;
    for (int i = 1; i <= n; i++) {
        int d = 0;
        for (int j = i; j > 0; j /= 10) {
            d++;
        }

        if (d % 2 == 1) {
            cnt++;
        }
    }

    cout << cnt << endl;
}
```
