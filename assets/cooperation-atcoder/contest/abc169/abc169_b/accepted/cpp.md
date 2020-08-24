# AtCoder Beginner Contest 169
## B - Multiplication 2
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    __int128 res = 1;
    for (int i = 0; i < n; i++) {
        if (res > 0) {
            res *= a[i];
        }

        if (a[i] == 0) {
            res = 0;
        } else if (res > 1000000000000000000L) {
            res = -1;
        }
    }

    cout << static_cast<long long>(res) << endl;
}

```
