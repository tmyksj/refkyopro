# AtCoder Beginner Contest 177
## C - Sum of product of pairs
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    long long mod = 1000000007;

    vector<long long> b(a);
    for (int i = 0; i < n - 1; i++) {
        b[i + 1] += b[i];
        b[i + 1] %= mod;
    }

    long long res = 0;
    for (int i = 0; i < n - 1; i++) {
        res += a[i] * (b[n - 1] - b[i] + mod);
        res %= mod;
    }

    cout << res << endl;
}
```
