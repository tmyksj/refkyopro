# 第一回 アルゴリズム実技検定 過去問
## F - DoubleCamelCase Sort
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <utility>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<pair<string, string>> t(0);
    for (int i = 0, j = 1; j < static_cast<int>(s.size()); j++) {
        if ('A' <= s[j] && s[j] <= 'Z') {
            string k = s.substr(i, j - i + 1);
            string v = s.substr(i, j - i + 1);

            k[0] += 'a' - 'A';
            k[k.size() - 1] += 'a' - 'A';

            t.push_back(make_pair(k, v));

            i = j + 1;
            j++;
        }
    }

    sort(t.begin(), t.end());

    for (int i = 0; i < static_cast<int>(t.size()); i++) {
        cout << t[i].second;
    }
    cout << endl;
}
```
