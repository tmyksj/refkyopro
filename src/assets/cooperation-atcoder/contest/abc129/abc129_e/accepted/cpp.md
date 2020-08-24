# AtCoder Beginner Contest 129
## E - Sum Equals Xor
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string l;
    cin >> l;

    long long mod = 1000000007;

    vector<long long> dp0(l.size(), 0), dp1(l.size(), 0);
    dp0[0] = 2;
    dp1[0] = 1;
    for (int i = 1; i < static_cast<int>(l.size()); i++) {
        if (l[i] == '0') {
            dp0[i] += dp0[i - 1];
            dp1[i] += 3 * dp1[i - 1];
        } else {
            dp0[i] += 2 * dp0[i - 1];
            dp1[i] += dp0[i - 1];
            dp1[i] += 3 * dp1[i - 1];
        }

        dp0[i] %= mod;
        dp1[i] %= mod;
    }

    cout << (dp0[l.size() - 1] + dp1[l.size() - 1]) % mod << endl;
}
```
