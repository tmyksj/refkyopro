# AtCoder Beginner Contest 106
## B - 105
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int cnt = 0;
    for (int i = 1; i <= n; i += 2) {
        int c = 0;
        for (int j = 1; j <= i; j++) {
            if (i % j == 0) {
                c++;
            }
        }

        if (c == 8) {
            cnt++;
        }
    }

    cout << cnt << endl;
}
```
