# AtCoder Regular Contest 024
## A - くつがくっつく
```cpp
#include <algorithm>
#include <iostream>
#include <map>

using namespace std;

int main() {
    int l, r;
    cin >> l >> r;

    map<int, int> m_l;
    for (int i = 0; i < l; i++) {
        int l_i;
        cin >> l_i;
        m_l[l_i]++;
    }

    map<int, int> m_r;
    for (int i = 0; i < r; i++) {
        int r_i;
        cin >> r_i;
        m_r[r_i]++;
    }

    int res = 0;
    for (map<int, int>::iterator i = m_l.begin(); i != m_l.end(); i++) {
        res += min(i->second, m_r[i->first]);
    }

    cout << res << endl;
}
```
