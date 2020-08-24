# AtCoder Beginner Contest 063
## C - Bugged
```cpp
#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    set<int> st;
    st.insert(0);
    for (int i = 0; i < n; i++) {
        set<int> next;
        for (set<int>::iterator j = st.begin(); j != st.end(); j++) {
            next.insert(*j);
            next.insert(*j + s[i]);
        }
        st = next;
    }

    int res = 0;
    for (set<int>::reverse_iterator i = st.rbegin(); i != st.rend(); i++) {
        if (*i % 10 != 0) {
            res = *i;
            break;
        }
    }

    cout << res << endl;
}
```
