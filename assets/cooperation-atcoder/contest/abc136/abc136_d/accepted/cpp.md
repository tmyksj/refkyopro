# AtCoder Beginner Contest 136
## D - Gathering Children
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    int n = static_cast<int>(s.size());

    vector<int> dl(n, 0);
    for (int i = n - 2; i >= 0; i--) {
        if (s[i] == 'R') {
            dl[i] = dl[i + 1] + 1;
        }
    }

    vector<int> dr(n, 0);
    for (int i = 1; i < n; i++) {
        if (s[i] == 'L') {
            dr[i] = dr[i - 1] + 1;
        }
    }

    vector<int> res(n, 0);
    for (int i = 0; i < n; i++) {
        if (s[i] == 'L') {
            res[i - dr[i] + (dr[i] % 2)]++;
        } else {
            res[i + dl[i] - (dl[i] % 2)]++;
        }
    }

    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << res[i];
    }
    cout << endl;
}
```
