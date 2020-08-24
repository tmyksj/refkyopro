# AtCoder Beginner Contest 119
## D - Lazy Faith
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int a, b, q;
    cin >> a >> b >> q;

    vector<long long> s(a);
    for (int i = 0; i < a; i++) {
        cin >> s[i];
    }

    vector<long long> t(b);
    for (int i = 0; i < b; i++) {
        cin >> t[i];
    }

    for (int i = 0; i < q; i++) {
        long long x;
        cin >> x;

        long long d_min = 20000000000LL;
        vector<long long>::iterator sp, tp;

        sp = lower_bound(s.begin(), s.end(), x);
        if (sp != s.begin()) {
            tp = lower_bound(t.begin(), t.end(), *(sp - 1));
            long long d = min(tp == t.begin() ? 20000000000LL : (x - *(tp - 1)),
                tp == t.end() ? 20000000000LL : (x - *(sp - 1)) + (*tp - *(sp - 1)));
            if (d_min > d) {
                d_min = d;
            }
        }
        if (sp != s.end()) {
            tp = lower_bound(t.begin(), t.end(), *sp);
            long long d = min(tp == t.begin() ? 20000000000LL : (*sp - x) + (*sp - *(tp - 1)),
                tp == t.end() ? 20000000000LL : (*tp - x));
            if (d_min > d) {
                d_min = d;
            }
        }

        tp = lower_bound(t.begin(), t.end(), x);
        if (tp != t.begin()) {
            sp = lower_bound(s.begin(), s.end(), *(tp - 1));
            long long d = min(sp == s.begin() ? 20000000000LL : (x - *(sp - 1)),
                sp == s.end() ? 20000000000LL : (x - *(tp - 1)) + (*sp - *(tp - 1)));
            if (d_min > d) {
                d_min = d;
            }
        }
        if (tp != t.end()) {
            sp = lower_bound(s.begin(), s.end(), *tp);
            long long d = min(sp == s.begin() ? 20000000000LL : (*tp - x) + (*tp - *(sp - 1)),
                sp == s.end() ? 20000000000 : (*sp - x));
            if (d_min > d) {
                d_min = d;
            }
        }

        cout << d_min << endl;
    }
}
```
