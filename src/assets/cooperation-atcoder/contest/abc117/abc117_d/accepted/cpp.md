# AtCoder Beginner Contest 117
## D - XXOR
```cpp
#include <iostream>
#include <vector>

using namespace std;

long long solve(const vector<long long>& a, long long k, int idx, bool k_lt) {
    if (idx < 0) {
        return 0;
    }

    long long cnt_z = 0, cnt_o = 0;
    for (int i = 0; i < static_cast<int>(a.size()); i++) {
        if ((a[i] & (1LL << idx)) == 0) {
            cnt_z++;
        } else {
            cnt_o++;
        }
    }

    if (k_lt) {
        return (1LL << idx) * (cnt_z > cnt_o ? cnt_z : cnt_o) + solve(a, k, idx - 1, true);
    } else if ((k & (1LL << idx)) == 0) {
        return (1LL << idx) * cnt_o + solve(a, k, idx - 1, false);
    } else {
        long long fx_z = (1LL << idx) * cnt_z + solve(a, k, idx - 1, false);
        long long fx_o = (1LL << idx) * cnt_o + solve(a, k, idx - 1, true);
        return (fx_z > fx_o ? fx_z : fx_o);
    }
}

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    cout << solve(a, k, 40, false) << endl;
}
```
