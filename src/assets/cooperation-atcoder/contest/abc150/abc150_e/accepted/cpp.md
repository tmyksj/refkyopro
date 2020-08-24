# AtCoder Beginner Contest 150
## E - Change a Little Bit
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    sort(c.begin(), c.end(), greater<long long>());

    int mod = 1000000007;
    long long res = 0;
    for (int i = 0; i < n; i++) {
        res += c[i] * (i + 2);
        res %= mod;
    }

    for (int i = 1; i < n; i++) {
        res *= 4;
        res %= mod;
    }

    cout << res << endl;
}
```
