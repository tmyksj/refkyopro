# AtCoder Beginner Contest 138
## E - Strings of Impurity
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    vector<vector<int>> s_dict(26, vector<int>(0));
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        s_dict[s[i] - 'a'].push_back(i);
    }

    long long r = 0;
    for (int s_idx = 0, t_idx = 0; t_idx < static_cast<int>(t.size()); ) {
        vector<int>::iterator ite = lower_bound(s_dict[t[t_idx] - 'a'].begin(), s_dict[t[t_idx] - 'a'].end(), s_idx);
        if (ite == s_dict[t[t_idx] - 'a'].end()) {
            if (s_idx == 0) {
                r = -1;
                break;
            }

            r += s.size() - s_idx;
            s_idx = 0;
        } else {
            r += *ite - s_idx + 1;
            s_idx = *ite + 1;

            if (s_idx == static_cast<int>(s.size())) {
                s_idx = 0;
            }

            t_idx++;
        }
    }

    cout << r << endl;
}
```
