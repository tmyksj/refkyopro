# AtCoder Beginner Contest 065
## C - Reconciled?
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n, m;
    cin >> n >> m;

    if (n < m) {
        swap(n, m);
    }

    long long res = (n == m ? 2 : (n - 1 == m ? n : 0));
    if (res > 0) {
        for (long long i = m; i > 0; i--) {
            res *= i;
            res %= 1000000007;
            res *= i;
            res %= 1000000007;
        }
    }

    cout << res << endl;
}
```
