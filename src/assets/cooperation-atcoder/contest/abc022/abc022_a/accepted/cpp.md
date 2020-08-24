# AtCoder Beginner Contest 022
## A - Best Body
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, s, t;
    cin >> n >> s >> t;

    int res = 0;
    for (int i = 0, w = 0; i < n; i++) {
        int a;
        cin >> a;
        w += a;

        if (s <= w && w <= t) {
            res++;
        }
    }

    cout << res << endl;
}
```
