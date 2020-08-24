# CADDi 2018 for Beginners
## B - AtCoder Alloy
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, h, w;
    cin >> n >> h >> w;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;

        if (a >= h && b >= w) {
            res++;
        }
    }

    cout << res << endl;
}
```
