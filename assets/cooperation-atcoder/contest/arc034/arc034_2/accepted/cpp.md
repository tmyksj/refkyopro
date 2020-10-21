# AtCoder Regular Contest 034
## B - 方程式
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n;
    cin >> n;

    vector<long long> res(0);
    for (long long i = max(0LL, n - 162); i <= n; i++) {
        long long j = 0;
        for (long long k = i; k > 0; k /= 10) {
            j += k % 10;
        }

        if (i + j == n) {
            res.push_back(i);
        }
    }

    cout << res.size() << endl;
    for (int i = 0; i < static_cast<int>(res.size()); i++) {
        cout << res[i] << endl;
    }
}
```
