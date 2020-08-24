# 第二回 アルゴリズム実技検定
## G - ストリング・クエリ
```cpp
#include <iostream>
#include <map>
#include <utility>
#include <vector>
#include <string>

using namespace std;

int main() {
    int q;
    cin >> q;

    vector<pair<int, int>> s(0);
    for (int i = 0, j = 0, k = 0; i < q; i++) {
        int t;
        cin >> t;

        if (t == 1) {
            string c;
            int x;
            cin >> c >> x;
            s.push_back(make_pair(c[0], x));
        } else {
            int d;
            cin >> d;

            map<int, long long> m;
            for (int l = 0; j < static_cast<int>(s.size()) && l < d; j++) {
                if (k + d - l < s[j].second) {
                    int del = d - l;
                    k += del;
                    l += del;
                    m[s[j].first] += del;
                    break;
                } else if (k + d - l == s[j].second) {
                    int del = d - l;
                    k = 0;
                    l += del;
                    m[s[j].first] += del;
                } else {
                    int del = s[j].second - k;
                    k = 0;
                    l += del;
                    m[s[j].first] += del;
                }
            }

            long long r = 0;
            for (map<int, long long>::iterator l = m.begin(); l != m.end(); l++) {
                r += l->second * l->second;
            }

            cout << r << endl;
        }
    }
}
```
