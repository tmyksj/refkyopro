# 第二回全国統一プログラミング王決定戦予選
## B - Counting of Trees
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> d(n);
    for (int i = 0; i < n; i++) {
        cin >> d[i];
    }

    long long d_max = 0;
    vector<long long> cnt(n, 0);
    for (int i = 0; i < n; i++) {
        d_max = max(d_max, d[i]);
        cnt[d[i]]++;
    }

    if (d[0] == 0 && cnt[0] == 1) {
        long long res = cnt[0];
        for (int i = 1; i <= d_max; i++) {
            for (int j = 0; j < cnt[i]; j++) {
                res *= cnt[i - 1];
                res %= 998244353;
            }
        }

        cout << res << endl;
    } else {
        cout << "0" << endl;
    }
}
```
