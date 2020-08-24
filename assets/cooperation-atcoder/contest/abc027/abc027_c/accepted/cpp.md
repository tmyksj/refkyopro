# AtCoder Beginner Contest 027
## C - 倍々ゲーム
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n;
    cin >> n;

    int d = 0;
    for(long long i = n; i > 0; i /= 2) {
        d = (d == 0 ? 1 : 0);
    }

    int res = 0;
    for (long long i = 1; i <= n; i = 2 * i + d, d = (d == 0 ? 1 : 0), res = (res == 0 ? 1 : 0)) {
    }

    cout << (res == 0 ? "Takahashi" : "Aoki") << endl;
}
```
