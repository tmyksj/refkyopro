# AtCoder Beginner Contest 033
## C - 数式の書き換え
```cpp
#include <iostream>
#include <set>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<set<int>> t(1);
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if (s[i] == '+') {
            t.push_back(set<int>());
        } else {
            t[t.size() - 1].insert(s[i]);
        }
    }

    int res = 0;
    for (int i = 0; i < static_cast<int>(t.size()); i++) {
        if (t[i].find('0') == t[i].end()) {
            res++;
        }
    }

    cout << res << endl;
}
```
