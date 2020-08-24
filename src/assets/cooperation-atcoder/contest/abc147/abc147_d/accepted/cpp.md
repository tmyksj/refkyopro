# AtCoder Beginner Contest 147
## D - Xor Sum 4
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

    vector<int> cnt(63, 0);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 63; j++) {
            if ((a[i] & (1LL << j)) > 0) {
                cnt[j]++;
            }
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 63; j++) {
            if ((a[i] & (1LL << j)) > 0) {
                cnt[j]--;
                res += ((1LL << j) % 1000000007) * (n - i - cnt[j] - 1);
            } else {
                res += ((1LL << j) % 1000000007) * cnt[j];
            }

            res %= 1000000007;
        }
    }

    cout << res << endl;
}
```
