# AtCoder Beginner Contest 092
## B - Chocolate
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, d, x;
    cin >> n >> d >> x;

    int res = x;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        for (int j = 1; j <= d; j += a) {
            res++;
        }
    }

    cout << res << endl;
}
```
