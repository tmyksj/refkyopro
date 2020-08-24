# AtCoder Beginner Contest 174
## C - Repsept
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long k;
    cin >> k;

    vector<bool> m(k, false);
    long long res = 1;
    for (long long i = 1, j = 7 % k; !m[j]; i *= 10, i %= k, j += 7 * i, j %= k) {
        m[j] = true;
        if (j == 0) {
            break;
        }

        res++;
    }

    cout << (m[0] ? res : -1) << endl;
}
```
