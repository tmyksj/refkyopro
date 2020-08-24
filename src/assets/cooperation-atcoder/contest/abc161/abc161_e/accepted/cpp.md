# AtCoder Beginner Contest 161
## E - Yutori
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, k, c;
    string s;
    cin >> n >> k >> c >> s;

    int fwd_cnt = 0;
    vector<bool> fwd(n, false);
    for (int i = 0; i < n; i++) {
        if (s[i] == 'o') {
            fwd_cnt++;
            fwd[i] = true;
            i += c;
        }
    }

    int bwd_cnt = 0;
    vector<bool> bwd(n, false);
    for (int i = n - 1; i >= 0; i--) {
        if (s[i] == 'o') {
            bwd_cnt++;
            bwd[i] = true;
            i -= c;
        }
    }

    if (max(fwd_cnt, bwd_cnt) == k) {
        for (int i = 0; i < n; i++) {
            if (fwd[i] && bwd[i]) {
                cout << i + 1 << endl;
            }
        }
    }
}
```
