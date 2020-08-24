# 第一回 アルゴリズム実技検定 過去問
## H - まとめ売り
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    int q;
    cin >> q;

    vector<long long> sell(n, 0);
    long long sell_set = 0, sell_all = 0;

    long long remain_set = c[0], remain_all = c[0];
    for (int i = 1; i < n; i++) {
        if (i % 2 == 0) {
            remain_set = min(remain_set, c[i]);
        }
        remain_all = min(remain_all, c[i]);
    }

    for (int i = 0; i < q; i++) {
        int s;
        cin >> s;

        if (s == 1) {
            int x;
            long long a;
            cin >> x >> a;

            if (a + sell[x - 1] + (x % 2 == 1 ? sell_set : 0) + sell_all <= c[x - 1]) {
                sell[x - 1] += a;

                if (x % 2 == 1) {
                    remain_set = min(remain_set, c[x - 1] - sell[x - 1] - sell_set - sell_all);
                    remain_all = min(remain_all, c[x - 1] - sell[x - 1] - sell_set - sell_all);
                } else {
                    remain_all = min(remain_all, c[x - 1] - sell[x - 1] - sell_all);
                }
            }
        } else if (s == 2) {
            long long a;
            cin >> a;

            if (a <= remain_set) {
                sell_set += a;

                remain_set -= a;
                remain_all = min(remain_all, remain_set);
            }
        } else {
            long long a;
            cin >> a;

            if (a <= remain_all) {
                sell_all += a;

                remain_set -= a;
                remain_all -= a;
            }
        }
    }

    cout << accumulate(sell.begin(), sell.end(), 0LL) + (n + 1) / 2 * sell_set + n * sell_all << endl;
}
```
