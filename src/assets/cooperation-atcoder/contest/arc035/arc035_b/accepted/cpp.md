# AtCoder Regular Contest 035
## B - アットコーダー王国のコンテスト事情
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> t[i];
    }

    sort(t.begin(), t.end());

    long long r = 0;
    for (int i = 0, j = 0; i < n; i++) {
        r += t[i] + j;
        j += t[i];
    }

    long long mod = 1000000007;

    vector<long long> fact(n + 1, 1);
    for (int i = 2; i <= n; i++) {
        fact[i] = i * fact[i - 1] % mod;
    }

    long long s = 1;
    for (int i = 0; i < n; ) {
        vector<int>::iterator j = upper_bound(t.begin(), t.end(), t[i]);
        s = s * fact[distance(t.begin() + i, j)] % mod;
        i = distance(t.begin(), j);
    }

    cout << r << endl;
    cout << s << endl;
}
```
