# AtCoder Beginner Contest 060
## C - Sentou
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, t;
    cin >> n >> t;

    long long res = 0;
    for (long long i = 0, tl = 0; i < n; i++) {
        long long ti;
        cin >> ti;

        if (tl <= ti) {
            res += t;
        } else {
            res += t + ti - tl;
        }

        tl = ti + t;
    }

    cout << res << endl;
}
```
