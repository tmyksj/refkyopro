# AtCoder Beginner Contest 119
## C - Synthetic Kadomatsu
```cpp
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, a, b, c;
    cin >> n >> a >> b >> c;

    vector<int> l(n);
    for (int i = 0; i < n; i++) {
        cin >> l[i];
    }

    vector<int> l_sum((1 << n), 0), bit_cnt((1 << n), 0);
    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                l_sum[i] += l[j];
                bit_cnt[i]++;
            }
        }
    }

    int mp_min = (1 << 30);
    for (int i = 1; i < (1 << n); i++) {
        for (int j = 1; j < (1 << n); j++) {
            for (int k = 1; k < (1 << n); k++) {
                if ((i & j) > 0 || (j & k) > 0 || (k & i) > 0) {
                    continue;
                }

                int mp = 10 * (bit_cnt[i] + bit_cnt[j] + bit_cnt[k] - 3)
                    +abs(a - l_sum[i]) + abs(b - l_sum[j]) + abs(c - l_sum[k]);
                if (mp_min > mp) {
                    mp_min = mp;
                }
            }
        }
    }

    cout << mp_min << endl;
}
```
