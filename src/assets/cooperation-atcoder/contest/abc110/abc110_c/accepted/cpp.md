# AtCoder Beginner Contest 110
## C - String Transformation
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    bool flag = true;
    vector<int> s_rule(26, -1), t_rule(26, -1);
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if ((s_rule[s[i] - 'a'] == -1 || s_rule[s[i] - 'a'] == t[i] - 'a')
            && (t_rule[t[i] - 'a'] == -1 || t_rule[t[i] - 'a'] == s[i] - 'a')) {
            s_rule[s[i] - 'a'] = t[i] - 'a';
            t_rule[t[i] - 'a'] = s[i] - 'a';
        } else {
            flag = false;
            break;
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
