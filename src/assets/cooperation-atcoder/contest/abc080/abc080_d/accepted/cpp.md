# AtCoder Beginner Contest 080
## D - Recording
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int tl = 100000;

    int n, c;
    cin >> n >> c;

    vector<vector<int>> req(c, vector<int>(tl + 1, 0));
    for (int i = 0; i < n; i++) {
        int s, t, c;
        cin >> s >> t >> c;
        req[c - 1][s]++;
        req[c - 1][t]--;
    }

    vector<int> rec(tl + 1, 0);
    for (int i = 0; i < c; i++) {
        for (int j = 1; j <= tl; j++) {
            if (req[i][j] > 0) {
                rec[j - 1]++;
            } else if (req[i][j] < 0) {
                rec[j]--;
            }
        }
    }

    for (int i = 1; i <= tl; i++) {
        rec[i] += rec[i - 1];
    }

    int res = 0;
    for (int i = 0; i <= tl; i++) {
        res = max(res, rec[i]);
    }

    cout << res << endl;
}
```
