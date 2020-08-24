# AtCoder Beginner Contest 153
## F - Silver Fox vs Monster
```cpp
#include <algorithm>
#include <iostream>
#include <map>
#include <utility>
#include <vector>

using namespace std;

int main() {
    long long n, d, a;
    cin >> n >> d >> a;

    vector<pair<long long, long long>> xh(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> xh[i].first >> xh[i].second;
    }

    sort(xh.begin(), xh.end());

    long long res = 0, cur = 0;
    map<long long, long long> dr;
    for (int i = 0; i < n; i++) {
        for (map<long long, long long>::iterator j = dr.begin();
                j != dr.end() && j->first < xh[i].first; j = dr.begin()) {
            cur -= j->second;
            dr.erase(j);
        }

        if (cur < xh[i].second) {
            long long r = (xh[i].second - cur + a - 1) / a;
            res += r;
            cur += r * a;
            dr[xh[i].first + 2 * d] = r * a;
        }
    }

    cout << res << endl;
}
```
