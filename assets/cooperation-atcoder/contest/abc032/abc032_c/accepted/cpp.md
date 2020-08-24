# AtCoder Beginner Contest 032
## C - 列
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    vector<long long> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    if (find(s.begin(), s.end(), 0) == s.end()) {
        long long c = s[0], res = 0;
        for (int i = 0, j = 1; j < n; ) {
            for (; c <= k && j < n; j++) {
                res = max(res, static_cast<long long>(j - i));
                c *= s[j];
            }
            for (; c > k && i < j; i++) {
                c /= s[i];
            }

            res = max(res, static_cast<long long>(j - i));

            if (i == j) {
                c = s[i];
                j++;
            }
        }

        cout << res << endl;
    } else {
        cout << n << endl;
    }
}
```
