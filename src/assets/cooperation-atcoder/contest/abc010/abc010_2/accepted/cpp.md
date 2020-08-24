# AtCoder Beginner Contest 010
## B - 花占い
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        for (int j = a; j % 2 == 0 || j % 3 == 2; j--) {
            res++;
        }
    }

    cout << res << endl;
}
```
