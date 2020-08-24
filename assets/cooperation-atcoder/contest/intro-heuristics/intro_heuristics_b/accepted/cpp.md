# Introduction to Heuristics Contest
## B - Scoring
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int c_size = 26;

    int d;
    cin >> d;

    vector<int> c(c_size);
    for (int i = 0; i < c_size; i++) {
        cin >> c[i];
    }

    vector<vector<int>> s(d, vector<int>(c_size));
    for (int i = 0; i < d; i++) {
        for (int j = 0; j < c_size; j++) {
            cin >> s[i][j];
        }
    }

    vector<int> t(d);
    for (int i = 0; i < d; i++) {
        cin >> t[i];
        t[i]--;
    }

    int res = 0;
    vector<int> last(c_size, -1);
    for (int i = 0; i < d; i++) {
        last[t[i]] = i;
        res += s[i][t[i]];
        for (int j = 0; j < c_size; j++) {
            res -= c[j] * (i - last[j]);
        }
        cout << res << endl;
    }
}
```
