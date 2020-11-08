# AtCoder Regular Contest 026
## B - 完全数
```cpp
#include <iostream>
#include <numeric>
#include <set>

using namespace std;

int main() {
    long long n;
    cin >> n;

    set<long long> s;
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            s.insert(i);
            s.insert(n / i);
        }
    }

    long long r = accumulate(s.begin(), s.end(), -n);

    if (r < n) {
        cout << "Deficient" << endl;
    } else if (r == n) {
        cout << "Perfect" << endl;
    } else {
        cout << "Abundant" << endl;
    }
}
```
