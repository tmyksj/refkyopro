# AtCoder Beginner Contest 179
## C - A x B + C
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 0;
    for (int i = 1; i < n; i++) {
        res += (n - 1) / i;
    }

    cout << res << endl;
}
```
