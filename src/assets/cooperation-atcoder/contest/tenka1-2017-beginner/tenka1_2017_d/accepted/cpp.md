# Tenka1 Programmer Beginner Contest
## D - IntegerotS
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    vector<long long> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        if ((k | a[i]) <= k) {
            res += b[i];
        }
    }

    for (int i = 0; i <= 31; i++) {
        if ((k & (1LL << i)) > 0) {
            long long r = 0, s = ((k | ((1LL << i) - 1)) ^ (1LL << i));
            for (int j = 0; j < n; j++) {
                if ((s | a[j]) <= s) {
                    r += b[j];
                }
            }
            res = max(res, r);
        }
    }

    cout << res << endl;
}
```
