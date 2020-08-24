# AtCoder Beginner Contest 148
## E - Double Factorial
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n % 2 == 0) {
        long long res = 0;
        for (long long i = 10; n / i > 0; i *= 5) {
            res += n / i;
        }
        cout << res << endl;
    } else {
        cout << "0" << endl;
    }
}
```
