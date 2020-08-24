# AtCoder Beginner Contest 063
## B - Varied
```cpp
#include <iostream>
#include <set>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    set<int> st;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        st.insert(s[i]);
    }

    cout << (s.size() == st.size() ? "yes" : "no") << endl;
}
```
