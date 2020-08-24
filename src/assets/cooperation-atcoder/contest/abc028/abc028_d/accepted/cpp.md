# AtCoder Beginner Contest 028
## D - 乱数生成
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;
    cout << setprecision(12) << fixed
            << (6.0 * (k - 1) * (n - k)
                    + 3.0 * (k - 1)
                    + 3.0 * (n - k)
                    + 1.0) / (n * n * n) << endl;
}
```
