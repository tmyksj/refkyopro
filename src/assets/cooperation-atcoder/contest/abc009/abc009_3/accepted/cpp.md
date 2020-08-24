# AtCoder Beginner Contest 009
## C - 辞書式順序ふたたび
```cpp
#include <algorithm>
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    int n, k;
    string s;
    cin >> n >> k >> s;

    map<char, int> m_s, m_t;
    for (int i = 0; i < n; i++) {
        m_s[s[i]]++;
        m_t[s[i]]++;
    }

    string t = s;
    for (int i = 0, d0 = 0; i < n; i++) {
        for (map<char, int>::iterator j = m_t.begin(); j != m_t.end(); j++) {
            if (j->second == 0) {
                continue;
            }

            int d1 = (s[i] == j->first ? 0 : 1), d2 = n - i - 1;
            for (map<char, int>::iterator l = m_s.begin(); l != m_s.end(); l++) {
                d2 -= min(m_s[l->first] - (l->first == s[i] ? 1 : 0), m_t[l->first] - (l->first == j->first ? 1 : 0));
            }

            if (d0 + d1 + d2 <= k) {
                t[i] = j->first;
                break;
            }
        }

        m_s[s[i]]--;
        m_t[t[i]]--;
        d0 += (s[i] == t[i] ? 0 : 1);
    }

    cout << t << endl;
}
```
