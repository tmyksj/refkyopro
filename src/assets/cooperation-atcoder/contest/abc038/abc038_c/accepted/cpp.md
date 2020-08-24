# AtCoder Beginner Contest 038
## C - 単調増加
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long res = 0;
    for (int i = 0, j = 0, k = 1; i < n; i++, k++) {
        int a;
        cin >> a;

        if (j >= a) {
            k = 1;
        }

        j = a;
        res += k;
    }

    cout << res << endl;
}
```
