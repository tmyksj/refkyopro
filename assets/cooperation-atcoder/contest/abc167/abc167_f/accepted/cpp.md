# AtCoder Beginner Contest 167
## F - Bracket Sequencing
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <string>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    vector<pair<int, int>> t(0), u(0);
    for (int i = 0; i < n; i++) {
        int a = 0, b = 0;

        for (int j = 0; j < static_cast<int>(s[i].size()); j++) {
            if (s[i][j] == '(') {
                b++;
            } else if (s[i][j] == ')' && b > 0) {
                b--;
            } else {
                a++;
            }
        }

        if (b - a >= 0) {
            t.push_back(make_pair(a, i));
        } else {
            u.push_back(make_pair(b, i));
        }
    }

    sort(t.begin(), t.end());
    sort(u.begin(), u.end(), greater<pair<int, int>>());

    bool res = true;
    for (int i = 0, j = 0; i < n; i++) {
        int v = (i < static_cast<int>(t.size()) ? t[i].second : u[i - t.size()].second);

        for (int k = 0; k < static_cast<int>(s[v].size()); k++) {
            if (s[v][k] == '(') {
                j++;
            } else {
                j--;
            }
            res = res && j >= 0;
        }
        res = res && (i < n - 1 || j == 0);
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
