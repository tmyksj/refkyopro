# AtCoder Beginner Contest 146
## C - Buy an Integer
```cpp
#include <iostream>

using namespace std;

int main() {
    long long a, b, x;
    cin >> a >> b >> x;

    long long res = 0;
    if (a * 1000000000 + b * 10 <= x) {
        res = 1000000000;
    } else {
        for (int i = 9, j = 100000000, k = 1000000000; i > 0; i--, j /= 10, k /= 10) {
            if (k <= (x - b * i) / a) {
                res = k - 1;
                break;
            } else if (j <= (x - b * i) / a) {
                res = (x - b * i) / a;
                break;
            }
        }
    }

    cout << res << endl;
}
```
