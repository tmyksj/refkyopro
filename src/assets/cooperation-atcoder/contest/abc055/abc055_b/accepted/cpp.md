# AtCoder Beginner Contest 055
## B - Training Camp
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long res = 1;
    for (long long i = 2; i <= n; i++) {
        res *= i;
        res %= 1000000007;
    }

    cout << res << endl;
}
```
