# AtCoder Beginner Contest 151
## C - Welcome to AtCoder
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<bool> is_ac(n, false);
    vector<int> wa_cnt(n, 0);

    for (int i = 0; i < m; i++) {
        int p;
        string s;
        cin >> p >> s;

        if (s == "AC") {
            is_ac[p - 1] = true;
        } else if (!is_ac[p - 1]) {
            wa_cnt[p - 1]++;
        }
    }

    int res_ac = 0, res_wa = 0;
    for (int i = 0; i < n; i++) {
        if (is_ac[i]) {
            res_ac++;
            res_wa += wa_cnt[i];
        }
    }

    cout << res_ac << " " << res_wa << endl;
}
```
