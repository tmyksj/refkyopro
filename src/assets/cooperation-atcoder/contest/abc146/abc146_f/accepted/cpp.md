# AtCoder Beginner Contest 146
## F - Sugoroku
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, m;
    string s;
    cin >> n >> m >> s;

    int idx = n, reach = n;
    vector<int> res(0);
    while (idx > 0) {
        int r = min(idx, m);
        while (s[idx - r] == '1' && idx - r < reach) {
            r--;
        }

        if (idx - r == reach) {
            break;
        }

        reach = idx - min(idx, m);
        idx -= r;
        res.push_back(r);
    }

    if (idx == 0) {
        cout << res[res.size() - 1];
        for (int i = res.size() - 2; i >= 0; i--) {
            cout << " " << res[i];
        }
        cout << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
