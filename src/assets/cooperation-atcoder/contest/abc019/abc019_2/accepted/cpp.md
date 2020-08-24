# AtCoder Beginner Contest 019
## B - 高橋くんと文字列圧縮
```cpp
#include <iostream>
#include <string>
#include <utility>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<pair<char, int>> t(1, make_pair(s[0], 1));
    for (int i = 1; i < static_cast<int>(s.size()); i++) {
        if (t[t.size() - 1].first == s[i]) {
            t[t.size() - 1].second++;
        } else {
            t.push_back(make_pair(s[i], 1));
        }
    }

    for (int i = 0; i < static_cast<int>(t.size()); i++) {
        cout << t[i].first << t[i].second;
    }
    cout << endl;
}
```
