# diverta 2019 Programming Contest
## B - RGB Boxes
```cpp
#include <iostream>

using namespace std;

int main() {
    int r, g, b, n;
    cin >> r >> g >> b >> n;

    int res = 0;
    for (int i = 0; i * r <= n; i++) {
        for (int j = 0; j * g <= n; j++) {
            if (n - i * r - j * g >= 0 && (n - i * r - j * g) % b == 0) {
                res++;
            }
        }
    }

    cout << res << endl;
}
```
