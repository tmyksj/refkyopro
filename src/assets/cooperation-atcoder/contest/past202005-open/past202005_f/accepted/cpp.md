# 第三回 アルゴリズム実技検定
## F - 回文行列
```cpp
#include <iostream>
#include <set>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    string res = a[0];
    for (int i = 0; i < (n + 1) / 2; i++) {
        set<int> s, t;
        for (int j = 0; j < n; j++) {
            s.insert(a[i][j]);
            t.insert(a[n - i - 1][j]);
        }

        set<int>::iterator j = s.begin();
        for (; j != s.end(); j++) {
            if (t.find(*j) != t.end()) {
                res[i] = res[n - i - 1] = *j;
                break;
            }
        }

        if (j == s.end()) {
            res = "-1";
            break;
        }
    }

    cout << res << endl;
}
```
