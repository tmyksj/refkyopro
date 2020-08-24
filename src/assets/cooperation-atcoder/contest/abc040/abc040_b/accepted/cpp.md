# AtCoder Beginner Contest 040
## B - □□□□□
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 1000000000;
    for (int i = 1; i * i <= n; i++) {
        if (res > (n / i) - i + n - (n / i * i)) {
            res = (n / i) - i + n - (n / i * i);
        }
    }

    cout << res << endl;
}
```
