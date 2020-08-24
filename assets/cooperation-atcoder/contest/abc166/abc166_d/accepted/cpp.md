# AtCoder Beginner Contest 166
## D - I hate Factorization
```cpp
#include <iostream>

using namespace std;

int main() {
    long long x;
    cin >> x;

    for (long long a = -6208; a <= 6208; a++) {
        for (long long b = -6208; b <= 6208; b++) {
            if (a * a * a * a * a - b * b * b * b * b == x) {
                cout << a << " " << b << endl;
                goto out;
            }
        }
    }
out:
    ;
}
```
