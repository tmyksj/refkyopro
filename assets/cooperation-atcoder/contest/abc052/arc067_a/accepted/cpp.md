# AtCoder Beginner Contest 052
## C - Factors of Factorial
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n;
    cin >> n;

    vector<long long> cnt(n + 1, 0);
    for (int i = 2; i <= n; i++) {
        for (int j = i, k = 2; j > 1; k++) {
            for (; j % k == 0; j /= k) {
                cnt[k]++;
            }
        }
    }

    long long res = 1;
    for (int i = 2; i <= n; i++) {
        if (cnt[i] > 0) {
            res *= cnt[i] + 1;
            res %= 1000000007;
        }
    }

    cout << res << endl;
}
```
