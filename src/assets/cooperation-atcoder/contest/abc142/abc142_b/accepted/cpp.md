# AtCoder Beginner Contest 142
## B - Roller Coaster
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int h;
        cin >> h;

        if (h >= k) {
            res++;
        }
    }

    cout << res << endl;
}
```
