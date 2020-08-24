# diverta 2019 Programming Contest
## C - AB Substrings
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < static_cast<int>(s[i].size()) - 1; j++) {
            if (s[i][j] == 'A' && s[i][j + 1] == 'B') {
                res++;
            }
        }
    }

    int c1 = 0, c2 = 0, c3 = 0;
    for (int i = 0; i < n; i++) {
        if (s[i][0] == 'B' && s[i][s[i].size() - 1] == 'A') {
            c1++;
        } else if (s[i][0] == 'B' && s[i][s[i].size() - 1] != 'A') {
            c2++;
        } else if (s[i][0] != 'B' && s[i][s[i].size() - 1] == 'A') {
            c3++;
        }
    }

    res += (c1 == 0 ? (c2 < c3 ? c2 : c3) : (c2 + c3 > 0 ? c1 + (c2 < c3 ? c2 : c3) : c1 - 1));
    cout << res << endl;
}
```
