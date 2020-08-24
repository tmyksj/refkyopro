# AtCoder Beginner Contest 032
## D - ナップサック問題
```cpp
#include <algorithm>
#include <iostream>
#include <map>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, w;
    cin >> n >> w;

    vector<int> vi(n), wi(n);
    int v_max = 0, w_max = 0;
    for (int i = 0; i < n; i++) {
        cin >> vi[i] >> wi[i];
        v_max = max(v_max, vi[i]);
        w_max = max(w_max, wi[i]);
    }

    long long res = 0;

    if (n <= 30) {
        map<long long, long long> wv0_m;
        for (int i = 0; i < (1 << (n / 2)); i++) {
            long long v_sum = 0, w_sum = 0;
            for (int j = 0; j < n / 2; j++) {
                if ((i & (1 << j)) > 0) {
                    v_sum += vi[j];
                    w_sum += wi[j];
                }
            }
            wv0_m[w_sum] = max(wv0_m[w_sum], v_sum);
        }

        vector<pair<long long, long long>> wv0;
        for (map<long long, long long>::iterator i = wv0_m.begin(); i != wv0_m.end(); i++) {
            wv0.push_back(make_pair(i->first, i->second));
        }

        map<long long, long long> wv1_m;
        for (int i = 0; i < (1 << (n / 2 + n % 2)); i++) {
            long long v_sum = 0, w_sum = 0;
            for (int j = 0; j < n / 2 + n % 2; j++) {
                if ((i & (1 << j)) > 0) {
                    v_sum += vi[n / 2 + j];
                    w_sum += wi[n / 2 + j];
                }
            }
            wv1_m[w_sum] = max(wv1_m[w_sum], v_sum);
        }

        vector<pair<long long, long long>> wv1;
        for (map<long long, long long>::iterator i = wv1_m.begin(); i != wv1_m.end(); i++) {
            wv1.push_back(make_pair(i->first, i->second));
        }

        long long wv1_v_max = 0;
        for (int i = static_cast<int>(wv0.size()) - 1, j = 0; i >= 0; i--) {
            for (; j < static_cast<int>(wv1.size()) && wv0[i].first + wv1[j].first <= w; j++) {
                wv1_v_max = max(wv1_v_max, wv1[j].second);
            }

            if (wv0[i].first <= w) {
                res = max(res, wv0[i].second + wv1_v_max);
            }
        }
    } else if (v_max <= 1000) {
        long long inf = 1LL << 61;

        vector<long long> dp(n * v_max + 1, inf);
        dp[0] = 0;
        for (int i = 0; i < n; i++) {
            vector<long long> next(n * v_max + 1, inf);
            for (int j = 0; j < n * v_max + 1; j++) {
                if (dp[j] < inf) {
                    next[j] = min(next[j], dp[j]);
                    next[j + vi[i]] = min(next[j + vi[i]], dp[j] + wi[i]);
                }
            }
            dp = next;
        }

        for (int i = n * v_max; i >= 0; i--) {
            if (dp[i] <= w) {
                res = i;
                break;
            }
        }
    } else if (w_max <= 1000) {
        vector<long long> dp(n * w_max + 1, 0);
        for (int i = 0; i < n; i++) {
            vector<long long> next(n * w_max + 1, 0);
            for (int j = 0; j < n * w_max + 1; j++) {
                next[j] = max(next[j], dp[j]);
                if (j + wi[i] < n * w_max + 1) {
                    next[j + wi[i]] = max(next[j + wi[i]], dp[j] + vi[i]);
                }
            }
            dp = next;
        }

        for (int i = 0; i <= n * w_max + 1 && i <= w; i++) {
            res = max(res, dp[i]);
        }
    }

    cout << res << endl;
}
```
