# エクサウィザーズ 2019
## C - Snuke the Wizard
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, q;
    string s;
    cin >> n >> q >> s;

    vector<char> t(q), d(q);
    for (int i = 0; i < q; i++) {
        cin >> t[i] >> d[i];
    }

    int ll = -1, lr = n;
    while (ll < lr) {
        int m0 = (ll + lr + 2) / 2 - 1, mi = m0;
        for (int i = 0; i < q && 0 <= mi && mi < n; i++) {
            if (t[i] == s[mi] && d[i] == 'L') {
                mi--;
            } else if(t[i] == s[mi] && d[i] == 'R') {
                mi++;
            }
        }

        if (mi < 0) {
            ll = m0 + 1;
        } else {
            lr = m0;
        }
    }

    int rl = -1, rr = n;
    while (rl < rr) {
        int m0 = (rl + rr + 3) / 2 - 1, mi = m0;
        for (int i = 0; i < q && 0 <= mi && mi < n; i++) {
            if (t[i] == s[mi] && d[i] == 'L') {
                mi--;
            } else if(t[i] == s[mi] && d[i] == 'R') {
                mi++;
            }
        }

        if (mi < n) {
            rl = m0;
        } else {
            rr = m0 - 1;
        }
    }

    cout << rl - lr + 1 << endl;
}
```
