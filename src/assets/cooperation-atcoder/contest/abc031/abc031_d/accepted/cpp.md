# AtCoder Beginner Contest 031
## D - 語呂合わせ
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool solve(int k, int n, vector<vector<int>>& v, vector<string>& w,
        int i, vector<int>& j, vector<string>& res) {
    if (i <= k) {
        for (int l = 1; l <= 3; l++) {
            j[i] = l;
            if (solve(k, n, v, w, i + 1, j, res)) {
                return true;
            }
        }

        return false;
    } else {
        for (int l = 0; l < n; l++) {
            for (int m = 0, o = 0; m < static_cast<int>(v[l].size()); m++) {
                if (o + j[v[l][m]] <= static_cast<int>(w[l].size())) {
                    res[v[l][m]] = w[l].substr(o, j[v[l][m]]);
                    o += j[v[l][m]];
                } else {
                    return false;
                }
            }
        }

        for (int l = 0; l < n; l++) {
            string s = "";
            for (int m = 0; m < static_cast<int>(v[l].size()); m++) {
                s += res[v[l][m]];
            }

            if (s != w[l]) {
                return false;
            }
        }

        return true;
    }
}

int main() {
    int k, n;
    cin >> k >> n;

    vector<vector<int>> v(n, vector<int>(0));
    vector<string> w(n);
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s >> w[i];

        for (int j = 0; j < static_cast<int>(s.size()); j++) {
            v[i].push_back(s[j] - '0');
        }
    }

    vector<int> j(k + 1);
    vector<string> res(k + 1);
    solve(k, n, v, w, 1, j, res);

    for (int i = 1; i <= k; i++) {
        cout << res[i] << endl;
    }
}
```
