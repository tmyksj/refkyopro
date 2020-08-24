# AtCoder Beginner Contest 164
## C - gacha
```cpp
#include <iostream>
#include <set>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    set<string> st;
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;
        st.insert(s);
    }

    cout << st.size() << endl;
}
```
