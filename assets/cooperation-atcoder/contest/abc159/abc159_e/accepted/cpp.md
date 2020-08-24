# AtCoder Beginner Contest 159
## E - Dividing Chocolate
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w, k;
    cin >> h >> w >> k;

    vector<string> s(h);
    for (int i = 0; i < h; i++) {
        cin >> s[i];
    }

    int res = 1 << 29;
    for (int i = 0; i < (1 << (h - 1)); i++) {
        int rc = 0;
        for (int j = 0; j < h - 1; j++) {
            if ((i & (1 << j)) > 0) {
                rc++;
            }
        }

        int r = 0;
        bool ok = true;
        vector<int> c(rc + 1, 0);
        for (int j = 0; j < w; j++) {
            vector<int> c_next(rc + 1, 0);
            for (int l = 0, m = 0; l < h; l++) {
                if (s[l][j] == '1') {
                    c_next[m]++;
                }

                if ((i & (1 << l)) > 0) {
                    m++;
                }
            }

            int pat = 0;
            for (int l = 0; l < rc + 1; l++) {
                if (c_next[l] > k) {
                    pat = 2;
                } else if (c[l] + c_next[l] > k) {
                    pat = 1;
                }
            }

            if (pat == 0) {
                for (int l = 0; l < rc + 1; l++) {
                    c[l] += c_next[l];
                }
            } else if (pat == 1) {
                c = c_next;
                r++;
            } else {
                ok = false;
                break;
            }
        }

        if (ok) {
            res = min(res, r + rc);
        }
    }

    cout << res << endl;
}
```
