# AtCoder Beginner Contest 023
## C - 収集王
```cpp
#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
    int r, c, k, n;
    cin >> r >> c >> k >> n;

    vector<vector<int>> rc(r, vector<int>(0)), cr(c, vector<int>(0));
    for (int i = 0; i < n; i++) {
        int ri, ci;
        cin >> ri >> ci;
        rc[ri - 1].push_back(ci - 1);
        cr[ci - 1].push_back(ri - 1);
    }

    map<int, int> c_map;
    for (int i = 0; i < c; i++) {
        c_map[cr[i].size()]++;
    }

    long long res = 0;
    for (int i = 0; i < r; i++) {
        res += c_map[k - rc[i].size()];
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < static_cast<int>(rc[i].size()); j++) {
            int s = rc[i].size() + cr[rc[i][j]].size();
            if (s == k) {
                res--;
            } else if (s == k + 1) {
                res++;
            }
        }
    }

    cout << res << endl;
}
```
